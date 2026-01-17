
import React, { useEffect } from 'react';
import BlogCard from '@/components/BlogCard';
import RevealOnScroll from '@/components/RevealOnScroll';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface BlogProps {
  language: 'en' | 'ar';
}

import { getBlogPosts } from '@/lib/blog-data';

const Blog: React.FC<BlogProps> = ({ language }) => {
  const isRtl = language === 'ar';

  const content = {
    en: {
      title: 'Blog',
      subtitle: 'Latest News & Updates',
      description: 'Stay updated with the latest news, releases, and behind-the-scenes content from Joospider.',
      categories: {
        all: 'All',
        news: 'News',
        releases: 'Releases',
        events: 'Events',
        features: 'Features'
      },
    },
    ar: {
      title: 'المدونة',
      subtitle: 'آخر الأخبار والتحديثات',
      description: 'ابق على اطلاع بآخر الأخبار والإصدارات والمحتوى من خلف الكواليس من جوسبايدر.',
      categories: {
        all: 'الكل',
        news: 'أخبار',
        releases: 'إصدارات',
        events: 'فعاليات',
        features: 'مميزات'
      },
    }
  };

  const [activeCategory, setActiveCategory] = React.useState('all');

  const text = language === 'en' ? content.en : content.ar;

  const allPosts = getBlogPosts(language);
  const blogPosts = activeCategory === 'all'
    ? allPosts
    : allPosts.filter(post => post.category === activeCategory);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={cn("min-h-screen bg-spider-dark pt-24 pb-12", isRtl ? 'rtl' : 'ltr')} dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {text.title}
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <p className="text-xl text-spider-red mb-6">
              {text.subtitle}
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={400}>
            <p className="text-white/80 mb-8 max-w-2xl">
              {text.description}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={500}>
            <div className="flex flex-wrap gap-2 mb-12">
              {Object.entries(text.categories).map(([key, label]) => (
                <Button
                  key={key}
                  variant={activeCategory === key ? "default" : "outline"}
                  onClick={() => setActiveCategory(key)}
                  className={cn(
                    "rounded-full px-6 transition-all duration-300",
                    activeCategory === key
                      ? "bg-spider-red text-white hover:bg-spider-red/90"
                      : "border-white/20 text-white/70 hover:text-white hover:border-white/40 bg-transparent"
                  )}
                >
                  {label}
                </Button>
              ))}
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <RevealOnScroll key={post.id} delay={100 * index}>
                <BlogCard post={post} language={language} />
              </RevealOnScroll>
            ))}
          </div>
          {blogPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-white/50 text-xl">
                {language === 'en' ? 'No posts found in this category.' : 'لا توجد مقالات في هذا القسم.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Blog;
