"use client";

import Image from "next/image";

export default function PersonalTouch() {
    return (
        <section className="py-24 bg-base-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
                <div className="space-y-6">
                    <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 text-primary mb-2">
                        <Image src="/rose.svg" alt="Rose" width={32} height={32} />
                    </div>

                    <h2 className="font-playfair text-3xl font-bold text-neutral">A Bit About Me</h2>

                    <p className="text-xl font-caveat text-neutral/80 leading-relaxed max-w-2xl mx-auto">
                        "In my free time, I enjoy reading, spending time with family, and exploring how
                        positive habits can improve daily life. Pink is my favorite color — it reminds
                        me of warmth and hope. Blue has always felt like a calming, lucky presence in my life."
                    </p>

                    <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
                        <div className="flex items-center gap-2 text-sm font-medium text-neutral/50">
                            <span className="w-8 h-px bg-primary/20"></span>
                            Thank you for visiting Jasmine's world
                            <span className="w-8 h-px bg-primary/20"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
