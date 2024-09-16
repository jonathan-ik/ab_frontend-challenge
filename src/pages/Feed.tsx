import Header from "../components/Header";
import Search from "../components/Search";

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    imageUrl: "https://www.smartservice.com/wp-content/uploads/2021/03/office-dispatch-computer.png",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
        userId: "user789",
      name: "Jonathan Ikwuonwu",
      role: "entreprenuer",
      href: `/relationships/user/${"user789"}`,
      imageUrl: "https://avatars.design/wp-content/uploads/2016/09/avatar1b.jpg",
    },
  },
  // More posts...
];

export default function Feed() {
  return (
    <>
      <Header />
      <div className="bg-white py-24 sm:py-32 text-left">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h2 className="text-4xl font-extrabold tracking-tight text-blue-700 sm:text-5xl">
              From the blog
            </h2>
            <p className="mt-2 text-lg leading-8 text-black">
              Learn how to grow your business with our expert advice.
            </p>
            <Search />
            <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
              {posts.map((post) => (
                <article key={post.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                  <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                    <img alt="" src={post.imageUrl} className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover shadow-lg" />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-300" />
                  </div>
                  <div>
                    <div className="flex items-center gap-x-4 text-xs">
                      <time dateTime={post.datetime} className="text-gray-500">
                        {post.date}
                      </time>
                      <a
                        href={post.category.href}
                        className="relative z-10 rounded-full bg-blue-100 px-3 py-1.5 font-medium text-blue-700 hover:bg-blue-200"
                      >
                        {post.category.title}
                      </a>
                    </div>
                    <div className="group relative max-w-xl">
                      <h3 className="mt-3 text-xl font-bold leading-7 text-blue-700 group-hover:text-blue-500">
                        <a href={post.href}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                      </h3>
                      <p className="mt-4 text-md leading-6 text-black">
                        {post.description}
                      </p>
                    </div>
                    <div className="mt-6 flex border-t border-gray-200 pt-6">
                      <div className="relative flex items-center gap-x-4">
                        <img alt="" src={post.author.imageUrl} className="h-12 w-12 rounded-full bg-gray-50 shadow-md" />
                        <div className="text-sm leading-6">
                          <p className="font-bold text-blue-700">
                            <a href={post.author.href}>
                              <span className="absolute inset-0" />
                              {post.author.name}
                            </a>
                          </p>
                          <p className="text-gray-600">{post.author.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
