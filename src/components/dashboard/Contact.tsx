import IconUser from '@/icons/dashboard/IconUser';

type RecentContactProps = {
  contact: {
    id: number;
    name: string;
    email: string;
  };
};

const RecentContact = ({ contact }: RecentContactProps) => {
  return (
    <div className="flex gap-2">
      <div className="">
        <IconUser />
      </div>

      <div className="flex flex-col justify-center">
        <span className="text-black text-btnText">{contact.name}</span>
        <span className="text-black-200 text-small">{contact.email}</span>
      </div>
    </div>
  );
};
export default RecentContact;
