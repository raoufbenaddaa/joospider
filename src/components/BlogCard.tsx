
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { BlogPost } from '@/lib/blog-data';

interface BlogCardProps {
  post: BlogPost;
  language: 'en' | 'ar';
}

const BlogCard: React.FC<BlogCardProps> = ({ post, language }) => {
  const isRtl = language === 'ar';

  const buttonText = language === 'en' ? 'Read More' : 'قراءة المزيد';

  return (
    <div
      className="spider-card overflow-hidden group h-full flex flex-col"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="text-xs text-white/50 mb-2">{post.date}</div>
        <h3 className="font-bold text-white text-xl mb-2 line-clamp-2">{post.title}</h3>
        <p className="text-white/70 mb-4 line-clamp-3">{post.excerpt}</p>
        <Link
          to={`/blog/${post.id}`}
          className="inline-flex items-center text-spider-red hover:text-white transition-colors mt-auto"
        >
          {buttonText}
          <ArrowRight size={14} className={cn("transition-transform", isRtl ? "mr-1 rotate-180" : "ml-1")} />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
