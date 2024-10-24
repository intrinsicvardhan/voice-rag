import "./status-message.css";

type Properties = {
    isRecording: boolean;
};

export default function StatusMessage({ isRecording }: Properties) {
    if (!isRecording) {
        return (
          <div style={{ textAlign: 'center' }}>
            <p className="text mb-4 mt-6">Ask me anything bank related service</p>
            <p className="text mb-4 mt-6">बैंक से संबंधित सेवा के बारे में मुझसे कुछ भी पूछें </p>
            <p className="text mb-4 mt-6">ব্যাংক সম্পর্কিত পরিষেবা সম্পর্কে আমাকে কিছু জিজ্ঞাসা করুন </p>
            <p className="text mb-4 mt-6">வங்கி தொடர்பான சேவையைப் பற்றி என்னிடம் ஏதேனும் கேளுங்கள் </p>
            <p className="text mb-4 mt-6">ബാങ്കുമായി ബന്ധപ്പെട്ട സേവനത്തെക്കുറിച്ച് എന്നോടു ഒന്നും ചോദ്യമിടാം </p>
            <p className="text mb-4 mt-6">బ్యాంక్ సంబంధిత సేవ గురించి నన్ను ఏదైనా అడగండి </p>
            <p className="text mb-4 mt-6">ಬ್ಯಾಂಕ್ ಸಂಬಂಧಿತ ಸೇವೆಯ ಬಗ್ಗೆ ನನ್ನನ್ನು ಏನಾದರೂ ಕೇಳಿ </p>
            <p className="text mb-4 mt-6">બેંક સંબંધિત સેવા વિશે મને કંઈપણ પૂછો </p>
            <p className="text mb-4 mt-6">ਬੈਂਕ ਨਾਲ ਸਬੰਧਤ ਸੇਵਾ ਬਾਰੇ ਮੈਨੂੰ ਕੁਝ ਵੀ ਪੁੱਛੋ </p>
            <p className="text mb-4 mt-6">बँकेशी संबंधित सेवेबद्दल मला काहीही विचारा </p>
          </div>
        );
      }

    return (
        <div className="flex items-center">
            <div className="relative h-6 w-6 overflow-hidden">
                <div className="absolute inset-0 flex items-end justify-around">
                    {[...Array(4)].map((_, i) => (
                        <div
                            key={i}
                            className="w-1 rounded-full bg-purple-600 opacity-80"
                            style={{
                                animation: `barHeight${(i % 3) + 1} 1s ease-in-out infinite`,
                                animationDelay: `${i * 0.1}s`
                            }}
                        />
                    ))}
                </div>
            </div>
            <p className="text mb-4 ml-2 mt-6">Conversation in progress</p>
        </div>
    );
}
