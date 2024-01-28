import Input from '@/components/common/Input';

const ArtWork = () => {
  return (
    <div>
      <Input
        htmlFor="name-input"
        name="name"
        title="Name"
        inputAttribute={{
          type: 'text',
          placeholder: 'Enter your name',
        }}
        size="large"
      />
    </div>
  );
};
export default ArtWork;
