const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const app = express();

// ตั้งค่า Template Engine และ Layouts
app.use(expressLayouts);
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');

// กำหนดให้ใช้ไฟล์ views/layout.ejs เป็น Layout เริ่มต้น
app.set('layout', 'layout');

// รายการสินค้าแนะนำ (คอมพิวเตอร์และเกมมิ่งเกียร์)
const products = [
    {
        id: 'amber-gaming-pc',
        name: 'Amber Gaming PC รุ่น Starter',
        image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=700&q=80',
        alt: 'เคสคอมพิวเตอร์สำหรับเกมมิ่ง',
        label: 'ขายดี',
        price: '฿24,900',
        description: 'คอมพิวเตอร์สำหรับเล่นเกมและทำงาน มาพร้อมประสิทธิภาพที่ตอบโจทย์การใช้งานในชีวิตประจำวัน'
    },
    {
        id: 'pro-wireless-mouse',
        name: 'เมาส์ไร้สาย Pro Wireless',
        image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=700&q=80',
        alt: 'เมาส์คอมพิวเตอร์ไร้สาย',
        label: 'ยอดนิยม',
        price: '฿1,290',
        oldPrice: '฿1,590',
        description: 'เมาส์ไร้สายสำหรับใช้งานได้สะดวกทั้งที่บ้านและที่ทำงาน'
    },
    {
        id: 'mechanical-rgb-keyboard',
        name: 'คีย์บอร์ด Mechanical RGB',
        image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=700&q=80',
        alt: 'คีย์บอร์ดเกมมิ่งพร้อมไฟ RGB',
        label: 'มาใหม่',
        price: '฿2,490',
        description: 'คีย์บอร์ด Mechanical พร้อมไฟ RGB สำหรับเล่นเกมและพิมพ์งาน'
    },
    {
        id: 'gaming-monitor-27',
        name: 'จอ Gaming Monitor 27 นิ้ว',
        image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=700&q=80',
        alt: 'จอคอมพิวเตอร์ความละเอียดสูง',
        label: 'ลดพิเศษ',
        price: '฿7,990',
        oldPrice: '฿8,990',
        description: 'จอ Gaming Monitor ขนาด 27 นิ้ว ภาพคมชัด เหมาะกับทั้งทำงานและเล่นเกม'
    }
];

// รายการอุปกรณ์เครือข่ายทั้งหมด (Network Devices)
const myProducts = [
    {
        id: 'P001',
        name: 'MikroTik hEX RB750Gr3',
        price: 2150.00,
        quantity: 15,
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=700&q=80',
        alt: 'MikroTik hEX RB750Gr3',
        label: 'ยอดนิยม',
        description: 'เราเตอร์ 5 พอร์ต Gigabit คุณภาพสูง รองรับการบริหารจัดการเครือข่าย VPN, Bandwidth Management และ Load Balance'
    },
    {
        id: 'P002',
        name: 'MikroTik Cloud Core Router CCR1009',
        price: 15500.00,
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=80',
        alt: 'MikroTik Cloud Core Router CCR1009',
        label: 'ระดับองค์กร',
        description: 'เราเตอร์ระดับ Core Network ประสิทธิภาพสูง 9 Cores CPU รองรับปริมาณทราฟฟิกมหาศาลและระบบเครือข่ายระดับองค์กร'
    },
    {
        id: 'P003',
        name: 'UBIQUITI UniFi AP AC LR',
        price: 3850.00,
        quantity: 8,
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=700&q=80',
        alt: 'UBIQUITI UniFi AP AC LR',
        label: 'ขายดี',
        description: 'แอคเซสพอยต์ส่งสัญญาณระยะไกล (Long-Range) มาตรฐาน 802.11ac Dual-Band กระจายสัญญาณได้ทั่วถึงและเสถียร'
    },
    {
        id: 'P004',
        name: 'Cisco Catalyst 2960-X 24-Port',
        price: 28000.00,
        quantity: 0,
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=80',
        alt: 'Cisco Catalyst 2960-X 24-Port',
        label: 'Enterprise',
        description: 'สวิตช์ระดับองค์กร 24 พอร์ต Gigabit Layer 2 เสถียรภาพสูง มาตรฐานระดับโลก พร้อมระบบความปลอดภัยขั้นสูง'
    },
    {
        id: 'P005',
        name: 'LINK CAT6 UTP Cable (305m)',
        price: 4200.00,
        quantity: 5,
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=700&q=80',
        alt: 'LINK CAT6 UTP Cable (305m)',
        label: 'มาตรฐาน',
        description: 'สายแลน CAT6 คุณภาพสูง ความยาว 305 เมตร (กล่อง) รองรับแบนด์วิดท์สูงสุด 250 MHz ถ่ายโอนข้อมูลได้เสถียร'
    },
    {
        id: 'P006',
        name: 'APC Smart-UPS 1000VA',
        price: 6500.00,
        quantity: 4,
        image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=700&q=80',
        alt: 'APC Smart-UPS 1000VA',
        label: 'สำรองไฟ',
        description: 'เครื่องสำรองไฟสำหรับเซิร์ฟเวอร์และอุปกรณ์เครือข่าย ป้องกันไฟตก ไฟกระชาก จอ LCD แสดงสถานะแบบเรียลไทม์'
    },
    {
        id: 'P007',
        name: '19" German Export Rack 42U',
        price: 12000.00,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=80',
        alt: '19 German Export Rack 42U',
        label: 'ตู้แร็ค',
        description: 'ตู้ Rack ขนาด 42U มาตรฐาน 19 นิ้ว โครงสร้างเหล็กแข็งแรง ระบายความร้อนได้ดี พร้อมกุญแจล็อคเพื่อความปลอดภัย'
    },
    {
        id: 'P008',
        name: 'TP-Link 24-Port Gigabit Switch',
        price: 2100.00,
        quantity: 20,
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=700&q=80',
        alt: 'TP-Link 24-Port Gigabit Switch',
        label: 'คุ้มค่า',
        description: 'สวิตช์ 24 พอร์ต ความเร็วกิกะบิต ใช้งานง่ายแบบ Plug and Play ประหยัดพลังงาน เหมาะสำหรับสำนักงานขนาดเล็ก'
    },
    {
        id: 'P009',
        name: 'Fiber Optic Patch Cord SC-SC',
        price: 150.00,
        quantity: 50,
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=700&q=80',
        alt: 'Fiber Optic Patch Cord SC-SC',
        label: 'ใยแก้วนำแสง',
        description: 'สายแพตช์คอร์ดใยแก้วนำแสง หัวต่อ SC to SC คุณภาพสูง สัญญาณสูญเสียน้อย เหมาะสำหรับงานเชื่อมต่อไฟเบอร์ออปติก'
    },
    {
        id: 'P010',
        name: 'RJ45 Connector LINK (100 Pack)',
        price: 550.00,
        quantity: 30,
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=700&q=80',
        alt: 'RJ45 Connector LINK (100 Pack)',
        label: 'หัวต่อแลน',
        description: 'หัวต่อสายแลน RJ45 CAT6 บรรจุ 100 ชิ้น/แพ็ค ขาทองแดงเคลือบทอง นำสัญญาณได้ดี ทนทาน'
    }
];

// ฟังก์ชันเรนเดอร์หน้าต่างๆ
const renderHome = (req, res) => {
    res.render('index', {
        title: 'หน้าแรก',
        activePage: 'home',
        products,
        networkProducts: myProducts
    });
};

const renderProducts = (req, res) => {
    res.render('product', {
        title: 'สินค้าแนะนำ',
        activePage: 'product',
        products
    });
};

const renderProductDetail = (req, res) => {
    const targetId = req.params.id;
    let found = products.find(item => item.id === targetId);

    if (!found) {
        const netItem = myProducts.find(item => item.id === targetId);
        if (netItem) {
            found = {
                ...netItem,
                price: typeof netItem.price === 'number' ? `฿${netItem.price.toLocaleString('th-TH')}` : netItem.price
            };
        }
    }

    if (!found) {
        return res.status(404).render('product-detail', {
            title: 'ไม่พบสินค้า',
            activePage: 'product',
            product: null
        });
    }

    res.render('product-detail', {
        title: found.name,
        activePage: 'product',
        product: found
    });
};

// Route สำหรับหน้าแรก
app.get(['/', '/index.html'], renderHome);

// Route สำหรับหน้าสินค้าแนะนำ
app.get(['/product', '/product.html'], renderProducts);

// Route สำหรับดูรายละเอียดสินค้า (กดดูสินค้าได้ทั้งสินค้าแนะนำและอุปกรณ์เครือข่าย)
app.get(['/product/:id', '/products/:id', '/showProduct/:id'], renderProductDetail);

////////////////////////  app.js  pagination ///////////////
app.get(['/products', '/products.html', '/showProduct', '/showProduct.html'], (req, res) => {
    // 1. รับค่าหน้าที่ต้องการจาก URL (ถ้าไม่มีให้ค่าเริ่มต้นเป็นหน้า 1)
    const page = parseInt(req.query.page) || 1;
   
    // 2. กำหนดจำนวนรายการที่ต้องการแสดงต่อหน้า
    const limit = 3;

    // 3. คำนวณหาจุดเริ่มต้นและจุดสิ้นสุดสำหรับการตัด Array
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    // 4. ตัด Array เพื่อเอาเฉพาะข้อมูลของหน้านั้นๆ (เสมือนการใช้ Skip และ Take)
    const paginatedProducts = myProducts.slice(startIndex, endIndex);

    // 5. คำนวณจำนวนหน้าทั้งหมด (ปัดเศษขึ้นด้วย Math.ceil)
    const totalPages = Math.ceil(myProducts.length / limit);

    // 6. ส่งข้อมูลทั้งหมดไปยัง View
    res.render('showProduct', {
        title: 'รายการอุปกรณ์เครือข่าย (แบบแบ่งหน้า)',
        activePage: 'showProduct',
        products: paginatedProducts, // ส่งไปเฉพาะรายการของหน้านั้น
        currentPage: page,           // ส่งหมายเลขหน้าปัจจุบันไปแสดงผล
        totalPages: totalPages,      // ส่งจำนวนหน้าทั้งหมดไปสร้างปุ่ม
        limit: limit,
        startIndex: startIndex,      // ส่งค่าเริ่มต้นไปเพื่อรันเลขลำดับให้ต่อเนื่อง
        totalItems: myProducts.length // จำนวนรายการทั้งหมด
    });
});

// Route สำหรับหน้าเกี่ยวกับเรา
app.get(['/about', '/about.html'], (req, res) => {
    res.sendFile(path.join(__dirname, 'webPage', 'about.html'));
});

// เริ่มต้น Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} (http://localhost:${PORT})`);
});

module.exports = app;
