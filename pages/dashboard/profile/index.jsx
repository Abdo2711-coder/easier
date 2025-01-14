import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { LayoutWithSidebar, Layout } from "components/layout";
import { getSession } from "next-auth/react";
import Tabs from "components/UI/Tabs";
import { UserCircleIcon, KeyIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types"
import EditProfileForm from "components/pages/profile-page/EditProfileForm";
import ChangePassword from "components/pages/profile-page/ChangePassword";


const Profile = ({ session }) => {
	const { t } = useTranslation("common");

	const tabsData = [
		{
			label: t("general"),
			icon: <UserCircleIcon className="h-5 w-5" />,
			content: <EditProfileForm session={session} />,
		},
		{
			label: t("change password"),
			icon: <KeyIcon className="h-5 w-5" />,
			content: <ChangePassword />,
		},
	];

	return (
		<div className="flex-1">
			<Tabs tabsData={tabsData} />
		</div>
	);
};

export default Profile;
Profile.propTypes = {
	session: PropTypes.object.isRequired
}
Profile.getLayout = function PageLayout(page) {
	return (
		<Layout>
			<LayoutWithSidebar>{page}</LayoutWithSidebar>
		</Layout>
	);
};

export const getServerSideProps = async ({ req, locale, resolvedUrl }) => {
	const session = await getSession({ req: req });
	const userRole = session?.user?.role;

	if (!session || (userRole !== "admin" && userRole !== "superAdmin")) {
		const loginUrl = locale === "en" ? `/${locale}/login` : "/login";
		return {
			redirect: {
				destination: `${loginUrl}?returnTo=${encodeURIComponent(resolvedUrl || "/")}`,
				permanent: false,
			},
		};
	} else {
		return {
			props: {
				session,
				...(await serverSideTranslations(locale, ["common"])),
			},
		};
	}
};