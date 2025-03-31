let button1, dropdown, button3, button4;
let sprite1, sprite2, sprite3, sprite4;
let showSprite1 = false;
let showSprite2 = false;
let showSprite3 = false;
let showSprite4 = false;
let iframe; // 用於嵌入內容的 iframe
let bgImage; // 背景圖片

function preload() {
  // 載入圖片精靈和背景圖片
  sprite1 = loadImage('Kula_09.gif');
  sprite2 = loadImage('Kula_11.gif'); // 圖片精靈 Kula_11.gif
  sprite3 = loadImage('Kula_07.gif');
  sprite4 = loadImage('Kula_10 (1).gif');
  bgImage = loadImage('121.png'); // 載入背景圖片
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // 建立第一個按鈕
  button1 = createButton('自我介紹');
  button1.position(150, 50); // 往右移動 100px
  button1.size(100, 50);
  button1.style('font-size', '20px');
  button1.mouseOver(() => showSprite1 = true);
  button1.mouseOut(() => showSprite1 = false);
  button1.mousePressed(() => {
    if (iframe) iframe.remove(); // 如果已存在 iframe，先移除
    iframe = createElement('iframe');
    iframe.attribute('src', 'self.js'); // 嵌入 self.js
    iframe.position((windowWidth - 1100) / 2, (windowHeight - 600) / 2); // 設定 iframe 的位置為視窗中間
    iframe.size(1000, 700); // 設定 iframe 的大小
  });

  // 建立下拉式選單
  dropdown = createSelect();
  dropdown.position(280, 50); // 往右移動 100px
  dropdown.size(100, 50);
  dropdown.style('font-size', '20px');
  dropdown.option('選擇項目');
  dropdown.option('作品1');
  dropdown.option('作品2');
  dropdown.mouseOver(() => showSprite2 = true); // 滑鼠移動到下拉式選單時顯示圖片精靈
  dropdown.mouseOut(() => showSprite2 = false); // 滑鼠移開時隱藏圖片精靈
  dropdown.changed(() => {
    if (iframe) iframe.remove(); // 如果已存在 iframe，先移除
    if (dropdown.value() === '作品1') {
      iframe = createElement('iframe');
      iframe.attribute('src', 'https://411737025.github.io/20250310/');
      iframe.position((windowWidth - 1100) / 2, (windowHeight - 600) / 2); // 設定 iframe 的位置為視窗中間
      iframe.size(1000, 700); // 設定 iframe 的大小
    } else if (dropdown.value() === '作品2') {
      iframe = createElement('iframe');
      iframe.attribute('src', 'https://411737025.github.io/202533/');
      iframe.position((windowWidth - 1100) / 2, (windowHeight - 600) / 2); // 設定 iframe 的位置為視窗中間
      iframe.size(1000, 700); // 設定 iframe 的大小
    }
  });

  // 建立第三個按鈕
  button3 = createButton('筆記');
  button3.position(410, 50); // 往右移動 100px
  button3.size(100, 50);
  button3.style('font-size', '20px');
  button3.mouseOver(() => showSprite3 = true);
  button3.mouseOut(() => showSprite3 = false);
  button3.mousePressed(() => {
    if (iframe) iframe.remove(); // 如果已存在 iframe，先移除
    iframe = createElement('iframe');
    iframe.attribute('src', 'https://hackmd.io/@37581246/S1c5R-wpke');
    iframe.position((windowWidth - 1100) / 2, (windowHeight - 600) / 2); // 設定 iframe 的位置為視窗中間
    iframe.size(1000, 700); // 設定 iframe 的大小
  });

  // 建立第四個按鈕
  button4 = createButton('測驗題目');
  button4.position(530, 50); // 往右移動 100px
  button4.size(100, 50);
  button4.style('font-size', '20px');
  button4.mouseOver(() => showSprite4 = true);
  button4.mouseOut(() => showSprite4 = false);
  button4.mousePressed(() => {
    if (iframe) iframe.remove(); // 如果已存在 iframe，先移除
    iframe = createElement('iframe');
    iframe.attribute('src', 'index1.html'); // 嵌入 index1.html
    iframe.position((windowWidth - 1100) / 2, (windowHeight - 600) / 2); // 設定 iframe 的位置為視窗中間
    iframe.size(1000, 700); // 設定 iframe 的大小
  });
}

function draw() {
  // 設置背景圖片
  background(bgImage);

  // 顯示圖片精靈，位置固定在 (35, 50)
  if (showSprite1) {
    image(sprite1, 35, 50, 100, 100);
  }
  if (showSprite2) {
    image(sprite2, 35, 50, 100, 100); // 顯示圖片精靈 Kula_11.gif
  }
  if (showSprite3) {
    image(sprite3, 35, 50, 100, 100);
  }
  if (showSprite4) {
    image(sprite4, 35, 50, 100, 100);
  }

  // 設定海草的數量
  let seaweedCount = 30;

  // 繪製多條海草
  for (let j = 0; j < seaweedCount; j++) {
    // 計算線條的起始 x 座標
    let x = j * (width / seaweedCount);

    // 計算線條的起始 y 座標
    let y = height;

    // 設定海草的節點數量
    let segments = 44; // 確保總高度為 220

    // 設定每個節點的長度
    let segmentLength = 5; // 每個節點的長度較短，以控制總高度

    // 設定顏色，並設置透明度為 65%
    stroke(50 + j * 10, 100 + j * 5, 150 + j * 3, 165); // 透明度 65% 對應 255 * 0.65 = 165

    // 設定線條粗細
    strokeWeight(75);

    // 繪製從 y 軸開始延伸的搖擺直線
    let totalHeight = 0;
    for (let i = 0; i < segments; i++) {
      // 計算每個節點的擺動
      let angle = sin(frameCount * 0.05 + i * 0.5) * 0.5;

      // 計算下一個節點的位置
      let x2 = x + sin(angle) * segmentLength;
      let y2 = y - cos(angle) * segmentLength;

      // 繪製節點之間的線條
      line(x, y, x2, y2);

      // 更新 x 和 y 座標
      x = x2;
      y = y2;

      // 更新總高度
      totalHeight += segmentLength;

      // 如果總高度達到 220，則停止繪製
      if (totalHeight >= 220) {
        break;
      }
    }

    // 確保海草的總高度為 220
    if (totalHeight < 220) {
      let remainingHeight = 220 - totalHeight;
      let x2 = x;
      let y2 = y - remainingHeight;
      line(x, y, x2, y2);
    }
  }
}
