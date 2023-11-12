import IconUser from '@/icons/dashboard/IconUser';
import ImageIconCom from '../common/ImageIconCom';
import arrow from '@/assets/icons/arrow2.svg';
import Link from 'next/link';

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
        <span className="text-black-200 text-small flex justify-between gap-5">
          {contact.email}
          <Link href={`/contact/contactinfo/${contact.name}`}>
            <ImageIconCom src={arrow} />
          </Link>
        </span>
      </div>
    </div>
  );
};
export default RecentContact;
