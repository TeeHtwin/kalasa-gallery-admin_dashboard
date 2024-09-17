import IconUser from '../../icons/dashboard/IconUser';

type RecentContactProps = {
  contact: {
    id: number;
    name: string;
    email: string;
  };
};

const RecentContact = ({ contact }: RecentContactProps) => {
  console.log(`Contact ${contact}`);
  const { email, name } = contact;
  return (
    <div className="flex gap-2">
      <div className="">
        <IconUser />
      </div>

      <div className="flex flex-col justify-center">
        <span className="text-black">{name}</span>
        <span className="text-black-200 text-sm">{email}</span>
      </div>
    </div>
  );
};
export default RecentContact;
