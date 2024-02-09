




const BlogTable = async() => {

  const res = await fetch('https://staging.kalasa.gallery/api/admin/blog')
  const blogs: any[] = []

  console.log(res);
  

  return <>
    {blogs?.map(blog => (
      <div key={blog.id}>
        <p>{blog.id}</p>
        <p>{blog.title}</p>
        <hr />
      </div>

    ))}
  </>;
};
export default BlogTable;
