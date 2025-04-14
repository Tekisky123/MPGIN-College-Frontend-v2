import GalleryTable from "./GalleryTable";
import NotificationsTable from "./NotificationsTable";
import TeachersTable from "./TeachersTablet";


const SchoolComponent = ({ school }: { school: string }) => {
  return (
    <div className="space-y-8">
      <GalleryTable school={school} />
      <TeachersTable school={school} />
      <NotificationsTable school={school} />
    </div>
  );
};

export default SchoolComponent;