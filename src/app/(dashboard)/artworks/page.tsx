import Alert from '@/components/dialog/AlertDialog';

const ArtWork = () => {
  return (
    <div>
      <Alert
        trigger="Delete an artwork"
        title=" Are you sure do you want to delete this artwork from your
        database?"
        description="Please make sure to check the artwork before deleting it. Because it
        will be wiped out permanently and there’s no way to recover it back."
      />
    </div>
  );
};
export default ArtWork;
