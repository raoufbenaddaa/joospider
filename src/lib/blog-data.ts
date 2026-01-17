
export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    image: string;
    date: string;
    category: string;
    author: string;
}

export const getBlogPosts = (language: 'en' | 'ar'): BlogPost[] => {
    if (language === 'en') {
        return [
            {
                id: 1,
                title: 'New EP "JOOR3A\'RAP" - A Fresh Wave in Algerian Rap',
                excerpt: 'A new Ep from Joospider, which contains 7 songs exploring the depths of the Algerian hip-hop scene.',
                content: `
          <p>Joospider is back with a highly anticipated new project titled <strong>"JOOR3A'RAP"</strong>. This EP consists of 7 carefully crafted tracks that showcase the evolution of his sound and lyrical depth.</p>
          
          <h2>The Concept of "JOOR3A'RAP"</h2>
          <p>The title, which translates to "A Dose of Rap," reflects the artist's intention to provide a concentrated experience of authentic hip-hop. Each song serves as a different "dose," touching on various aspects of life in Algeria, personal struggles, and the current state of the music industry.</p>
          
          <h2>Tracklist Breakdown</h2>
          <ul>
            <li><strong>Track 1: Intro</strong> - Setting the stage for the journey.</li>
            <li><strong>Track 2: L'Spider</strong> - A high-energy track representing the brand.</li>
            <li><strong>Track 3: Orage</strong> - A deep dive into emotional struggles.</li>
            <li><strong>Track 4: Street Vibz</strong> - Capturing the essence of Algerian streets.</li>
            <li><strong>Track 5: Midnight</strong> - Reflective late-night thoughts.</li>
            <li><strong>Track 6: Legacy</strong> - Building something for the future.</li>
            <li><strong>Track 7: Outro</strong> - Final thoughts and looking ahead.</li>
          </ul>
          
          <h2>Why This EP Matters</h2>
          <p>In an era of fleeting singles, "JOOR3A'RAP" stands out as a cohesive body of work. It demonstrates Joospider's commitment to the craft and his ability to blend traditional influences with modern trap aesthetics. For anyone following the Algerian rap scene, this EP is an essential listen.</p>
          
          <p>The production quality has reached new heights, thanks to collaborations with top-tier producers in the region. The lyrics remain sharp, provocative, and deeply rooted in the reality of the youth.</p>
        `,
                image: 'https://i.postimg.cc/DwXqtJX7/Screenshot-3.png',
                date: '2024-04-15',
                category: 'releases',
                author: 'Joospider'
            },
            {
                id: 2,
                title: 'Joo X Studio: Bridging the Gap Between Media and Artists',
                excerpt: 'Inside the studio sessions where direct contact with rappers reveals the true essence of the craft.',
                content: `
          <p>Direct contact with rappers increases a lot of things in you that you, as a page owner or as a rap listener, may not be aware of. The <strong>Joo X Studio</strong> initiative was born from the desire to take the conversation from social media comments to the actual place where the magic happens: the recording studio.</p>
          
          <h2>The Importance of Physical Presence</h2>
          <p>Being in the studio while a track is being recorded provides a unique perspective. You see the frustration of a failed take, the excitement of a perfect flow, and the collaborative process between the artist and the producer. This experience has deeply influenced how we report on rap at Joospider.</p>
          
          <h2>What Happens Behind the Scenes</h2>
          <p>During our "Joo X Studio" sessions, we do more than just record music. We conduct deep-dive interviews, discuss the future of the genre, and build relationships that transcend digital interactions. This creates a stronger community and a better understanding of the artists' vision.</p>
          
          <ul>
            <li>Real-time feedback on new lyrics.</li>
            <li>Understanding the technical challenges of production.</li>
            <li>Building authentic relationships with rising stars.</li>
          </ul>
          
          <h2>Connecting with the Listeners</h2>
          <p>Our goal is to bring these exclusive insights to our audience. Through the "Joo X Studio" series, listeners get to see their favorite artists in their natural habitat, making the music more relatable and humanizing the rappers they look up to.</p>
        `,
                image: 'https://i.postimg.cc/gjgCFt1L/436452280-1499618347629634-865673058705487535-n.jpg',
                date: '2024-04-10',
                category: 'events',
                author: 'Joospider Team'
            },
            {
                id: 3,
                title: 'GOLDEN JOOSPIDER (2024) - Celebrating the Best of Algerian Rap',
                excerpt: 'Announcing the results of the GOLDEN JOOSPIDER award for the best song of the year 2024.',
                content: `
          <p>The <strong>GOLDEN JOOSPIDER</strong> award is our way of recognizing excellence in the Algerian rap scene. In 2024, the competition reached unprecedented levels, with dozens of high-quality submissions and thousands of fans participating in the voting process.</p>
          
          <h2>The Selection Process</h2>
          <p>How do we choose the winner? It's a combination of professional judging and public opinion. We look at several factors:</p>
          <ul>
            <li><strong>Lyricism:</strong> The depth and impact of the words.</li>
            <li><strong>Production:</strong> The quality of the beat and mixing.</li>
            <li><strong>Impact:</strong> How much the song resonated with the community.</li>
            <li><strong>Innovation:</strong> Bringing something new to the table.</li>
          </ul>
          
          <h2>The 2024 Winner</h2>
          <p>After weeks of deliberation and intense voting, we are proud to announce the recipient of the GOLDEN JOOSPIDER 2024. The award goes to a track that truly defined the sound of the streets this year.</p>
          
          <p>This award isn't just a trophy; it's a symbol of the hard work and dedication that artists put into their music. We believe that by celebrating these achievements, we help elevate the entire industry and encourage artists to keep pushing their boundaries.</p>
          
          <h2>Looking Forward to 2025</h2>
          <p>As we wrap up the 2024 celebrations, we are already looking forward to what next year will bring. The Algerian rap scene is growing faster than ever, and we are honored to be a part of its journey.</p>
        `,
                image: 'https://i.postimg.cc/pLXXVbft/490981041-1442749917103848-2444450614573245541-n.jpg',
                date: '2024-04-05',
                category: 'features',
                author: 'Awards Committee'
            }
        ];
    } else {
        return [
            {
                id: 1,
                title: 'الألبوم الجديد "جرعة راب" - موجة جديدة في الراب الجزائري',
                excerpt: 'ألبوم جديد من جوسبايدر، يحتوي على 7 أغنيات تستكشف أعماق مشهد الهيب هوب الجزائري.',
                content: `
          <p>يعود جوسبايدر بمشروع جديد مرتقب بشدة بعنوان <strong>"جرعة راب" (JOOR3A'RAP)</strong>. يتكون هذا الألبوم من 7 مقاطع تم إعدادها بعناية لتظهر تطور صوته وعمقه الكتابي.</p>
          
          <h2>مفهوم "جرعة راب"</h2>
          <p>يعكس العنوان نية الفنان في تقديم تجربة مركزة من الهيب هوب الأصيل. تعمل كل أغنية بـ "جرعة" مختلفة، تتناول جوانب متنوعة من الحياة في الجزائر، والنزاعات الشخصية، والوضع الحالي لصناعة الموسيقى.</p>
          
          <h2>تفاصيل قائمة الأغاني</h2>
          <ul>
            <li><strong>Intro</strong> - تمهيد الطريق للرحلة الموسيقية.</li>
            <li><strong>L'Spider</strong> - أغنية ذات طاقة عالية تمثل العلامة التجارية.</li>
            <li><strong>Orage</strong> - غوص عميق في الصراعات العاطفية.</li>
            <li><strong>Street Vibz</strong> - التقاط جوهر الشوارع الجزائرية.</li>
            <li><strong>Midnight</strong> - أفكار تأملية في وضح الليل.</li>
            <li><strong>Legacy</strong> - بناء شيء للمستقبل.</li>
            <li><strong>Outro</strong> - أفكار أخيرة وتطلعات للمستقبل.</li>
          </ul>
          
          <h2>لماذا هذا الألبوم مهم؟</h2>
          <p>في عصر الأغاني المنفردة العابرة، يبرز "جرعة راب" كعمل متكامل. إنه يظهر التزام جوسبايدر بفنه وقدرته على دمج التأثيرات التقليدية مع جماليات التراب الحديثة. لكل من يتابع مشهد الراب الجزائري، هذا الألبوم هو استماع ضروري.</p>
          
          <p>لقد وصلت جودة الإنتاج إلى مستويات جديدة، بفضل التعاون مع منتجين من الطراز الأول في المنطقة. تظل الكلمات حادة، ومثيرة للتفكير، ومتجذرة بعمق في واقع الشباب.</p>
        `,
                image: 'https://i.postimg.cc/DwXqtJX7/Screenshot-3.png',
                date: '2024-04-15',
                category: 'releases',
                author: 'جوسبايدر'
            },
            {
                id: 2,
                title: 'جوسبايدر في الاستوديو: سد الفجوة بين الإعلام والفنانين',
                excerpt: 'داخل جلسات الاستوديو حيث يكشف الاتصال المباشر مع الرابرز عن الجوهر الحقيقي للفن.',
                content: `
          <p>الإحتكاك المباشر مع الرابر يزيد فيك بزاف حاجات نتا كمالك لصفحة او كمستمع للراب ما تكونش على دراية بيهم. بدأت مبادرة <strong>جوسبايدر في الاستوديو (Joo X Studio)</strong> من الرغبة في نقل المحادثة من تعليقات وسائل التواصل الاجتماعي إلى المكان الحقيقي الذي يحدث فيه السحر: استوديو التسجيل.</p>
          
          <h2>أهمية التواجد الميداني</h2>
          <p>التواجد في الاستوديو أثناء تسجيل المقطع يوفر منظوراً فريداً. ترى إحباط المحاولة الفاشلة، وحماس التدفق المثالي، وعملية التعاون بين الفنان والمنتج. هذه التجربة أثرت بعمق على كيفية تغطيتنا للراب في جوسبايدر.</p>
          
          <h2>ماذا يحدث خلف الكواليس</h2>
          <p>خلال جلساتنا، نفعل أكثر من مجرد تسجيل الموسيقى. نجري مقابلات معمقة، ونناقش مستقبل النوع الموسيقي، ونبني علاقات تتجاوز التفاعلات الرقمية. هذا يخلق مجتمعاً أقوى وفهماً أفضل لرؤية الفنانين.</p>
          
          <ul>
            <li>تعليقات فورية على الكلمات الجديدة.</li>
            <li>فهم التحديات التقنية للإنتاج.</li>
            <li>بناء علاقات حقيقية مع النجوم الصاعدين.</li>
          </ul>
          
          <h2>التواصل مع المستمعين</h2>
          <p>هدفنا هو جلب هذه الرؤى الحصرية لجمهورنا. ومن خلال هذه السلسلة، يتمكن المستمعون من رؤية فنانيهم المفضلين في بيئتهم الطبيعية، مما يجعل الموسيقى أكثر قرباً وإنسانياً.</p>
        `,
                image: 'https://i.postimg.cc/gjgCFt1L/436452280-1499618347629634-865673058705487535-n.jpg',
                date: '2024-04-10',
                category: 'events',
                author: 'فريق جوسبايدر'
            },
            {
                id: 3,
                title: 'جولدن جوسبايدر (2024) - الاحتفال بأفضل ما في الراب الجزائري',
                excerpt: 'إعلان نتائج جائزة جولدن جوسبايدر لأفضل أغنية لعام 2024.',
                content: `
          <p>جائزة <strong>جولدن جوسبايدر</strong> هي طريقتنا لتقدير التميز في مشهد الراب الجزائري. في عام 2024، وصلت المنافسة إلى مستويات غير مسبوقة، مع عشرات المشاركات عالية الجودة وآلاف المعجبين المشاركين في عملية التصويت.</p>
          
          <h2>عملية الاختيار</h2>
          <p>كيف نختار الفائز؟ إنه مزيج بين التحكيم المهني ورأي الجمهور. نحن ننظر إلى عدة عوامل:</p>
          <ul>
            <li><strong>الكتابة:</strong> عمق وتأثير الكلمات.</li>
            <li><strong>الإنتاج:</strong> جودة اللحن والمكساج.</li>
            <li><strong>التأثير:</strong> مدى صدى الأغنية لدى المجتمع.</li>
            <li><strong>الابتكار:</strong> تقديم شيء جديد للمشهد.</li>
          </ul>
          
          <h2>الفائز لعام 2024</h2>
          <p>بعد أسابيع من المداولات والتصويت المكثف، نحن فخورون بالإعلان عن الحاصل على جائزة جولدن جوسبايدر 2024. تذهب الجائزة إلى مقطع حدد حقاً صوت الشارع هذا العام.</p>
          
          <p>هذه الجائزة ليست مجرد تمثال؛ إنها رمز للعمل الشاق والتفاني الذي يضعه الفنانون في موسيقاهم. نحن نؤمن أنه من خلال الاحتفال بهذه الإنجازات، نساعد في الارتقاء بالصناعة بأكملها وتشجيع الفنانين على الاستمرار في دفع حدودهم.</p>
          
          <h2>نتطلع إلى عام 2025</h2>
          <p>بينما نختتم احتفالات عام 2024، نتطلع بالفعل إلى ما سيأتي به العام المقبل. مشهد الراب الجزائري ينمو أسرع من أي وقت مضى، ويشرفنا أن نكون جزءاً من رحلته.</p>
        `,
                image: 'https://i.postimg.cc/pLXXVbft/490981041-1442749917103848-2444450614573245541-n.jpg',
                date: '2024-04-05',
                category: 'features',
                author: 'لجنة الجوائز'
            }
        ];
    }
};
