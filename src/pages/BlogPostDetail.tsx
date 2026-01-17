
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBlogPosts } from '@/lib/blog-data';
import RevealOnScroll from '@/components/RevealOnScroll';
import { cn } from '@/lib/utils';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';

interface BlogPostDetailProps {
    language: 'en' | 'ar';
}

const BlogPostDetail: React.FC<BlogPostDetailProps> = ({ language }) => {
    const { id } = useParams<{ id: string }>();
    const isRtl = language === 'ar';

    const posts = getBlogPosts(language);
    const post = posts.find(p => p.id === Number(id));

    useEffect(() => {
        window.scrollTo(0, 0);
        if (post) {
            document.title = `${post.title} | Joospider`;
        }
    }, [id, post]);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-spider-dark text-white pt-24">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">{language === 'en' ? 'Post Not Found' : 'المقال غير موجود'}</h1>
                    <Link to="/blog" className="text-spider-red hover:underline">
                        {language === 'en' ? 'Back to Blog' : 'العودة للمدونة'}
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <main className={cn("min-h-screen bg-spider-dark pt-24 pb-12", isRtl ? 'rtl' : 'ltr')}>
            <article className="section-container max-w-4xl mx-auto px-4">
                <RevealOnScroll>
                    <Link
                        to="/blog"
                        className="inline-flex items-center text-white/50 hover:text-spider-red transition-colors mb-8"
                    >
                        <ArrowLeft size={16} className={cn("mr-2", isRtl && "rotate-180 ml-2 mr-0")} />
                        {language === 'en' ? 'Back to Blog' : 'العودة للمدونة'}
                    </Link>
                </RevealOnScroll>

                <RevealOnScroll delay={200}>
                    <div className="aspect-video w-full rounded-2xl overflow-hidden mb-8 shadow-2xl border border-white/10">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </RevealOnScroll>

                <div className="space-y-6">
                    <RevealOnScroll delay={400}>
                        <div className="flex flex-wrap gap-4 text-sm text-white/50 mb-4">
                            <div className="flex items-center gap-1">
                                <Calendar size={14} className="text-spider-red" />
                                <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <User size={14} className="text-spider-red" />
                                <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Tag size={14} className="text-spider-red" />
                                <span>{post.category}</span>
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            {post.title}
                        </h1>
                    </RevealOnScroll>

                    <RevealOnScroll delay={600}>
                        <div
                            className="prose prose-invert prose-spider max-w-none mt-12 
              text-white/80 text-lg leading-relaxed 
              [&>h2]:text-white [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:mt-12 [&>h2]:mb-6
              [&>p]:mb-6 [&>ul]:list-disc [&>ul]:ps-6 [&>ul]:mb-6 [&>ul>li]:mb-2
              [&>strong]:text-spider-red [&>strong]:font-bold"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </RevealOnScroll>
                </div>

                {/* SEO Structure Helper (Invisible but helpful for crawlers if SSR) */}
                <div className="sr-only">
                    <h2>Summary</h2>
                    <p>{post.excerpt}</p>
                </div>
            </article>
        </main>
    );
};

export default BlogPostDetail;
