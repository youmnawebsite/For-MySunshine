const quotes = [
    "❤️أنتي احلى حاجه  في يومي",
    "😍❤️ضحكتك كفيله تخرجني من الزعل",
    "❤️انا محتاجك جنبي",
    "❤️‍🩹وجودك في حياتي اهم مني ع فكره ",
    "❤️انا ما صدقت لقيتك",
    "🥹❤️سلامتك من البرد يحبيبت قلبي",
    "🌚❤️متزعليش مني مكانش ينفع تنامي وانتي متضايقه مني",
    "❤️‍🩹انتي تستاهلي افضل احارب عشانك طول عمري",
    "❤️بحبك يا يمنى"
];

let currentIndex = 0;

function changeQuote() {
    const quoteElement = document.getElementById("quote");

    if (currentIndex < quotes.length) {
        quoteElement.textContent = quotes[currentIndex];
        currentIndex++;
    } else {
        quoteElement.textContent =    "💌مش عايزك تزعلي مني عشان مبعرفش اسيبك زعلانه عشان انتي اهم حد في حياتي";
    }
}