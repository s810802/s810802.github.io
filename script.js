// 祝福語數據庫
const greetings = {
    family: [
        "祝家人新年快樂，身體健康，萬事如意！",
        "願新的一年，家人平安喜樂，幸福美滿！",
        "祝福家人新年吉祥，心想事成，笑口常開！"
    ],
    friends: [
        "祝好友新年快樂，友誼長存，天天開心！",
        "願新的一年，朋友們事業有成，愛情甜蜜！",
        "祝福好友新年大吉，財源廣進，幸福安康！"
    ],
    business: [
        "祝您新年事業蒸蒸日上，財源廣進！",
        "願新的一年，合作愉快，共創輝煌！",
        "祝福貴公司新年新氣象，業績長紅！"
    ],
    humor: [
        "新年快樂！願你的煩惱像頭髮一樣越來越少！",
        "祝你新年體重像股票一樣跌跌不休！",
        "新年願望：錢包鼓鼓，肚子扁扁，快樂滿滿！"
    ]
};

// DOM元素
const generateBtn = document.getElementById('generateBtn');
const outputText = document.getElementById('outputText');
const outputBox = document.getElementById('outputBox');
const soundEffect = document.getElementById('soundEffect');

// 隨機生成祝福語
function generateGreeting() {
    // 隨機選擇一個分類
    const categories = Object.keys(greetings);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    
    // 從選中的分類中隨機選擇一條祝福語
    const messages = greetings[randomCategory];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    return randomMessage;
}

// 顯示複製成功提示
function showCopySuccess() {
    const successMsg = document.createElement('div');
    successMsg.className = 'copy-success';
    successMsg.textContent = '複製成功！';
    outputBox.appendChild(successMsg);
    
    // 移除提示
    setTimeout(() => {
        successMsg.remove();
    }, 500);
}

// 初始化事件監聽器
function init() {
    // 生成按鈕點擊事件
    generateBtn.addEventListener('click', () => {
        // 播放音效
        soundEffect.currentTime = 0;
        soundEffect.play();
        
        // 生成並顯示新祝福語
        const greeting = generateGreeting();
        outputText.textContent = greeting;
        outputText.style.opacity = 0;
        setTimeout(() => {
            outputText.style.opacity = 1;
        }, 10);
    });

    // 文案複製功能
    outputBox.addEventListener('click', () => {
        navigator.clipboard.writeText(outputText.textContent)
            .then(() => {
                showCopySuccess();
            })
            .catch(err => {
                console.error('複製失敗:', err);
            });
    });
}

// 初始化
init();
