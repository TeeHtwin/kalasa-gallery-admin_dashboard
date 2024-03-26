import { auth } from '@/auth';
import Breadcrumb from '@/components/ui/Breadcrumb';
import EditArtwork from './EditArtwork';

export default async function page({
  params,
}: {
  params: { artworkId: string };
}) {
  const session = await auth();
  return (
    <div className="px-4 overflow-scroll">
      <Breadcrumb
        items={[
          { name: 'Artworks', url: '/artworks' },
          { name: 'Edit an Artwork' },
        ]}
      />
      <EditArtwork token={session?.api_token ?? ''} id={params?.artworkId} />
    </div>
  );
}
