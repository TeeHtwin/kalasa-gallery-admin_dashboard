import TypographyH1 from '@/components/ui/TypographyH1';
import Image from 'next/image';
import Link from 'next/link';
const Artist = async () => {
  const response = await fetch(
    'https://staging.kalasa.gallery/api/admin/artist',
  );
  const jsonData = await response.json();
  console.log(jsonData);

  return (
    <div>
      <TypographyH1>Artists</TypographyH1>
      <Link
        className="bg-primary mt-5 py-2 px-4 inline-flex justify-center items-center gap-2 text-white font-medium text-base rounded-lg"
        href="/artists/create-artist"
      >
        <Image src="/IconAdd.svg" alt="IconAdd" width={15} height={15} />
        Create Artist
      </Link>
      <div className="grid gap-12 mt-10 grid-cols-2">
        {jsonData
          ? jsonData.data.map((data) => (
              <div className="flex gap-5" key={data.id}>
                <Image
                  className="w-1/3 rounded-2xl aspect-square object-cover bg-cover"
                  alt="profile"
                  src={data.profile_image}
                  height={200}
                  width={200}
                />
                <div className="flex flex-col">
                  <p className="text-xl text-bold text-zinc-900">{data.name}</p>
                  <p className="text-lg text-zinc-900">
                    Total artwork - {data.total_artwork}
                  </p>
                  <p className="text-lg text-zinc-900">
                    Sold artwork - {data.sold_artwork}
                  </p>

                  <p className="text-lg text-zinc-900">{data.added_date}</p>
                  <Link
                    className="text-primary underline"
                    href={`/artists/${data.id}`}
                  >
                    View
                  </Link>
                </div>
              </div>
            ))
          : ''}
      </div>
    </div>
  );
};
export default Artist;
