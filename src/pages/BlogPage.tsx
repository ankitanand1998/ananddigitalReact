import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBlogById, getAllBlogs } from '../services/api';
import { Blog } from '../types/blog';
import { Layout } from '../components/Layout';
import { Helmet } from 'react-helmet-async';
import { Tag, User } from 'lucide-react';
import { useFilteredBlogs } from '../hooks/useFilteredBlogs';
import { BlogCard } from '../components/BlogCard';

export function BlogPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const { selectedCategory, setSelectedCategory, filteredBlogs } = useFilteredBlogs(blogs);
  const [isLoading, setIsLoading] = useState(true); // State to track loading

  // Fetch all blogs and the specific blog
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        
        // Fetch all blogs
        const allBlogs = await getAllBlogs();
        setBlogs(allBlogs);

        // Fetch the specific blog by ID
        if (id) {
          const blogData = await getBlogById(id);
          setBlog(blogData || null); // Handle cases where blog is not found
        } else {
          setBlog(null); // Clear blog state if no ID is present
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setBlog(null); // Handle fetch errors gracefully
      } finally {
        setIsLoading(false); // Ensure loading state is cleared
      }
    };

    fetchData();
  }, [id]); // Dependency array ensures it refetches on ID change

  // Clear selected category when blogs change
  useEffect(() => {
    if (selectedCategory) {
      const filtered = blogs.filter(b => b.category === selectedCategory && b.id !== blog?.id);
      if (filtered.length === 0) {
        setSelectedCategory(null);
      }
    }
  }, [selectedCategory, blogs, blog?.id]);

  // Display loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <b className="text-xl text-gray-600">Please wait, the blog is loading...</b>
      </div>
    );
  }

  // Display a fallback for when the blog is not found
  if (!blog) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <b className="text-xl text-gray-600">Blog not found.</b>
      </div>
    );
  }

  const relatedBlogs = selectedCategory 
    ? filteredBlogs.filter(b => b.id !== blog.id)
    : [];

  return (
    <>
      <Helmet>
        <title>{blog.metaTitle}</title>
        <meta name="description" content={blog.metaDescription} />
        <link rel="canonical" href={blog.canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={blog.keywords} />
        <meta property="og:site_name" content="ananddigitalblog.vercel.app/" />
        <meta property="og:title" content={blog.ogTitle} />
        <meta property="og:description" content={blog.ogDescription} />
        <meta property="og:image" content={blog.bannerImg} />
      </Helmet>

      <Layout selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}>
        <article className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
          <div className="p-5">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{blog.heading}</h1>
          </div>
          <div className="p-4 mb-3">{blog.paragraph1}</div>
          <img
            src={blog.bannerImg}
            alt={blog.heading}
            className="w-full h-[400px] object-cover"
          />
          <div className="p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center text-indigo-600">
                <Tag className="w-5 h-5 mr-2" />
                <span className="font-medium">{blog.category}</span>
              </div>
            </div>
            <div className="prose max-w-none mb-12">{blog.paragraph2}</div>
            <div className="border-t pt-6">
              <div className="flex items-center">
                <img
                  src={'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAoAMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBBAcDAv/EAD0QAAEDAwEFBAkBBgYDAAAAAAEAAgMEBREhBhIxQXETIlFhFDJCgZGhscHRUgcjcoKi8GJjc5KTsjM0Q//EABoBAQACAwEAAAAAAAAAAAAAAAAEBQECBgP/xAAwEQACAgIABAQFAwQDAAAAAAAAAQIDBBEFEiExEyJBUTJhgZGhBkKxI1Jx0RTB8P/aAAwDAQACEQMRAD8A7igCAIAgCAIAgCAxlAMoBlAMoDKAIAgCAIAgCAIAgCAIAgCAIDynqIqdm/NI1jfFxwvOy2Fa3N6NoxlJ6itkTU7RQsOIInyHxPdH5VVdxmqPStbJtfD7JfE9EfLfq157gijHkM/VQLOL5D+HSJUeH1LvtngbrcCf/bf7mtH2UaXEMp/v/g9lh0L9obdbgDn0t56tb+EXEMpPfO/wHh0NfCe8V/rWHviN4824+ikQ4xkRfm0zxlw+p/D0JCn2ihfgVEToj+od5qsKeM1S6WLRFswLF8L2S0FRFOzfhkY9vi05VrXbCxbg9kKUJRepLR6r0NQgCAIAgCAIAgCAIDBIHEoCEuV8bCTFSYkfwL/ZH5VNmcVjX5KurJ+PhOfWfREBNNLUSF88jnu8SuftunbLmm9stYVRgtRWjSrrhTW+NpqZN1z3bscbRl8jjwDRzWaqZ2vymZSSPWaeKCLtamRkLB6zpHAAHqtYwlJ6itjmS7kPNtbY4yR6YZP9OJzh8cYUhYN79NfU18VH1TbV2aolbHHUSb7uDeweSfgCksG6K21+R4iJoajI4cVEa09HpsZWDJ9wTS08naQSFjvEc1613Tqe4PR52VxsWpLZYLbfGyubFWAMedA/2T+F0GHxWNnkt6MqsjClDzQ6omwQeBVzsgGUAQBAEAQBAEBhxwMoCsXm7moc6ClcWxD1nj2/Loub4hxF2brqfT1LbFxOXzz7kRgDkqYsTSu9yhtdulrJO9uaMb+tx4D++WV7UUu2xQ+5pOWkc3pb5K28Pu1YPSahrT2DHaNa46Do0AnQc8K8dMfD8OPREc0rhcKu5T9tWzuldyB4N6DgFvCuFa1BaMdTXaQHAuG8M5IzjK3BL0u0dZQsLLdDSUjTxMcOXHq4kkrwnRCx7nthdD2Ztfe2nJqWP8nRNx8gtP8AhUP9ptzyJKh28nY4NuFHHIw8XwktcPcdD8QvCfDoP4Ho2VrXct9rutFdIjJRTCTd9ZuMOZ1HL6Kutx7KnqaPZTTNwgHiF4mxL2a7GncIapxMXBrydWeXRXPD+IuGq7X09yuy8Tfnh3LODldIVJlAEAQBAEAKAgNobgQPRInakZkI8PBUXFc1xXgw+pY4WPzf1JEB0XPlufEr+zjfJp3Wl2vkFtXHmml7msuxyy6Xt9ys9spn7wfTh3a/4jpufLK6CFKhZKS9dEXfQiV6mAsgIAgCwD7gdGyQGWHtW82b5bn3hAWWyVuzgqInSQVVtqAe7M2pe5oPgT4dRjxUW6GRyvlaa9tGya9ToTCCxpa4OBAIcOY8VRyWnpolRfQzhYMk/s9cCcUcrskD9248x4LoeFZvN/Rn39Cozsfl/qR+pPgq8K4ygCAIAgNavqm0lLJM7XdGg8TyXhk3qiqU36HpVW7JqJS3vdI90jzlzjknzXFzm5ycpd2dFCKitIwtDY+XtD2uYfaGPitoy5ZJmsuqOQQW+R1RU0Tc+kwNfus5vLPWA88Bx893zXTxaktohyfL3Pq02mvvEpjt1JJPj1nAYY3q46Don+TEpqPcttB+zSskYDcbjBEc6xwMMmP5jj6LRzijR2+yJEfsyoud0qv+Jix4i9jXxZGvU/syBB9Fup3v86DT5FZ8SPsZVr9iCr9g7/RNLmQRVbBzpn5P+1wB+q2TTNlaityMfFI6KWN8cjfWjkaWuHUHULOjdNPsZijklkbHCxz5HnDWNGST5LHTuZOpbMWuW02mOnmkc+Rzi9zcktjJ9lvl98qiy7lbPcey/JIqWkS6inqZa50b2yRuw9pyD4FbQk4SUl3RrKKktMulBVNq6WOZo9biPA812mNcr6lYvU522t1zcWbK9zzCAIAgK5tPUZmipmnRo33deX3XPcau6xqX+S04fX3mQioy0CwDWuFNJVUckMFQ+nlI7krDgtdyPmPJe1NirmnJbRpOO0c4s89VHtnRS1xPpbaxrJS5oBJ9Q58e6feuhr5VFKPbRDn1i0zstNTwUkDKeliZDDGMMjY3AAXi25dyNo9epWDIQBZBjGVgGldbRb7xF2VypY5m+y4jDmdHcQt4zaHbscXq6N0V+nobeZHOZVGGHvd464Go+q9m0lt9iTHbSOoWmiNvoIad08k72jvyyOLi53M68vBc7fb4s3LWiXCOkbi8DcLIJvZeoxLLTE6O77fofsr3gt2nKp/5X/ZV8Rr7TRY10BVhAEBgoCmXWUzXKof4P3R0Gi43Os8TIm/no6DFjy0xRqqGSAgGp0HE6BZXcwyq7Q2d8W2FkqxHuiqqGMcT+tpB+bforzCU1XyTXYhWyi96Z0Q8VuRjCAIAgCAyOKyYOdbPWh8u2F8qzEXNpah7GfxuJJ+Df+y0zed1KMF3JVUorXMy19eKomtMmoLBkIDZtUnY3GnfyL909Dp+FMwbfDyIP/3UjZUOalougXZFAZQBAfLtASsPsCiPJc9zjxcSSuFsfNNv5nTQWopGFobBAGu3HB3gcreL5ZJmsltNG1d6ZtVDSz6F1NUxVDOgPe/pJXQVTT+pUyTT0SB4rQyYQBAEAQGVkEfaKZtLDUzuAa6qqZah58ie7/SGra2aXX2MRTl0NZxLnOceZJXPTlzSbLeK0kjC1MhAZYS17XDi1wIW9b1NP5o1mtxaL205C7pdjmT6WQEB8v4HosS7MepQzxPVcJLuzp12C1MhAFkHvT1ZhG69u8z5hSqMl19H2I91HP1XckWOD2hw4EZVpGSlFNEFrT0zKyYCAIAgMPcGNLncAMrEpKK2zMU29Ij6iqMo3GDdb9VV35LsWo9idVQodWa6ikgLACADiOqzHujD7MvkfqrvF2OYPpZAQGCgKNVM7Ormj/TI4fNcPkR5bpR+bOjplzVxfyPNeJ6hAEAQG9b5d5hiPEajorPDs3HlZByYafMbamkYIAgCA1LhJhgiHF2p6KFmWajyIlY0NvmNFVhNCAIAgPSlZ2lVDH+p4HzXtjx5rox+Z5XS1XJl5bwXcHOIygCAICpbQQGK5OdylaHDrwK5Xi1XJkc39xdYE+arXsRyqycEAQBZAa5zHBzdCFtGTg9o0klJaJaGUSxhwGD4FXVc/EgpFbOPLJxPRbmoQHlPK2FhcdfALS2fhwcjaEeaWiKc5z3FztXHUqlnJzk5Ms4xUFoLU2CALACyCR2eg7W5NcRkRNLs+fAfdWfCaufI5v7epBzp8tWvctgGF1RSmUAQBARG0NIZqPtWDL4Tvfy8/wA+5VfFaPFp5l3RMwreSzT7Mq65UvDKAclkw2UvavauWGd9BapN1zDuy1DcZB5tb9yrzh/Dk4q25b9kVeVlvfJAqDb9ere/tqK4TbucvjkIe13udn5K1sw6LFqUV9CFG62L2pHZdm55rhs1ba2bdbUzUzJHbgw3LhnGvJQJVxqfhx7IkqbmuZm+KrB3ZGkOHgtdGQ6rGO40k/4k0CG2jrKiksdxrYC100FO+Ru+MjIGcEBbKqNr5J9mYc3BcyOSG/Xq4O7auuMxbnLIo/3bW+YDcfPKsIYmPWtRgiNK+2b25Fv2U2rkmnZQXV4c55xDUO0JPJrvPwKqs/hsYxdtK+hNxct7UJlzVEWmzKGRwGVgFn2dpewpO1cMPmOT05f35rquFUeFTzPvIo823ns0uyJdWhDCAIAgMOAIIOo5hYaT6Apt0ozQ1Tmf/J2sfTw9y4/OxXj2v2fYvsW9Ww+ZHzzx08ZklcGsHNeWNjW5NiqqW2z0vyK6IOdj0iCqr1NISKZohZnjxcfwu/4d+kqK0pZT5pe3ov8AZyeXx66x8tPlX5KRdba+mLpo958OcknUt6+PVe+bw6VHmh1j/Bri5it8su5G4DtCAQfmqwnHXNgL3TXKzQ0QDYqqiibG6IHOWjQPHkdM+B9yrcitxlze5JqktaLLNC2UZ4O5EKOmexrGlkBwMH3rOzGit7dXKC12iSkk3ZautjMbIM8GHRzz5DXHiVIx63KW/RHjZLS0crGAAAMAaDHgrEjaJK12x9S4TS5ZANRjQvPl4dVZYPD5X+afSH8kLKzFV5YfEXekvU0Tg2pb2rc+sNHD7FePEP0lj2pyxXyv29H/AKNsTjttbSu8y/JOwTx1EQlhcHMPNcBk4tuNa6rVpo6ujIrvgp1vaZIWuiNdVhhH7turz5eHvXrg4ryLUvRdzTKuVUPmy4taGjA4eC7BJJaRQn0sgIAgCAIDUuNFHW05jfoeLXDi0qNlY0citxZ602uqXMjlm0wnhuRpJ2lvYtGByOfaH09yuv0xw6OLjOyXxt/ZexVcay3feor4V/JErqSmHLCw0mtMdiGuNn3iZaPR3OLkenh0VFm8K3udP2LXGz9eWz7kbQVtXaLhHVUjjDUwu03h8WuHMHmFz9lfeElotYyT6p9Dsmzd+pb9QCogwyZuGzwE6xu/B5FVVtTrevQmVz5kZ2kvtLYKD0ifD5X5bBCDgyO+wHMpVU7H8hOfKjjVdW1d1r5aqqeZqmZ3AD4Bo5Acgraut9IRWyHOWvNIkrfZg3ElYATyi5Dr+Ff4XCv33fYqcnP35a/uTI0GBoFepJLoVb6j5LIJbZkTy3EUtO0v7UEkcm49o+XL4Llv1Rw6OVjqyPxxf3RdcFynRe4/tf8AJ1O3UcdFTiJmp4uceLiqXFxo49fJH6lpdbK2XMzbUk8ggCAIAgCAICJ2gsVNe6cMm7krP/HM31mH7jyUnGyrMefNHseF9Ebo6Zy+7WmrtFR2VazAPqSN1a/oftxXT42XXkR3FlHbROp6kjRUo8QgNerooKtuJWd7k8HDgomThVZC8y6+5705FlT8rNCjjuVgr2V1seJC3RzR7bebXN5joudy+EWxWl5l+S3o4hXLv0YrI7nf699fc39mX6NafYbya1vIdfmmJwiya0/KvyL+IVxfTqzfpKKCkbiFmp4vdq4+9dFjYVWOvKuvuVF2RZc/MzYUs8AgN60WmsvFR2VFHkD15Heozqfso2Tl148dyfX2Pamidz1E6hs/YqayU5jg78r9ZZnes8/YeS5fJyrMifNL6IvKKI0x0iWUY9wgCAIAgCAIAgCA8KulgqoHQ1MTJIncWvGQVtGcoPmi9M1lFSWpFKvGwmrpbRMBz7CY6e535Vzj8Ya6XL6lbdw/1rZUq+2V1vdispJohyeW5afeNPmrerLptW4SRXzpsh8SNQHIyMYUg8ggCAEgcSAgNuhttdcHAUVJNMObg3DR/MdFHty6al55HrCmyb1FFts+wZy2S8TA8+xgcce934+Kp8ji7fSlfcsKeH+thdaSlgpIGw00TIom8GsGAFTylKb5pPbLKMVFaSPdamwQBAEAQBAEAQBAEAQBAYcAWkEAg8igfUi6rZ60VZJnt1OSeJa3dPxGF715V9fwzZ4zx6p/FE0H7E2I+rSyt/hqJPypMeKZS/d+EeLwKH6flhmxFiacmlld5OqZPyj4plNa5vwgsChPt+Wb9Ls/aaQ5gt9OD4ubvH4lRrMu+z4ps9oY9UO0SUaAAABgDkvA9tGUAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAf//Z'}
                  alt={blog.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="flex items-center mb-1">
                    <User className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="font-medium text-gray-900">Written by</span>
                  </div>
                  <span className="text-lg font-semibold text-indigo-600">
                    {blog.author}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>

        {selectedCategory && relatedBlogs.length > 0 && (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              More from {selectedCategory}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedBlogs.map((relatedBlog) => (
                <BlogCard key={relatedBlog.id} blog={relatedBlog} />
              ))}
            </div>
          </>
        )}

        {selectedCategory && relatedBlogs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No other articles found in this category.</p>
          </div>
        )}
      </Layout>
    </>
  );
}