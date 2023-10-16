'use client';

import { useGetUsers } from '@/api/example';

const ExamplePage = () => {
  const { data: users, isLoading, isError } = useGetUsers();

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>ERROR</div>;

  return (
    <div className="mx-auto flex flex-col gap-4 items-center">
      <h1 className="text-2xl">Users</h1>
      <section>
        {users.map((user) => (
          <div key={user.id} className="border p-4">
            <h2>{user.name}</h2>
            <span>{user.email}</span>
          </div>
        ))}
      </section>
    </div>
  );
};
export default ExamplePage;
