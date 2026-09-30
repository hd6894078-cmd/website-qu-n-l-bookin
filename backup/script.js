const books = [
{id:1,title:"Đắc Nhân Tâm",author:"Dale Carnegie",category:"Kỹ năng sống",rating:4.8,status:"available",year:1936,publisher:"NXB Trẻ",pages:320,description:"Cuốn sách tập trung vào nghệ thuật giao tiếp, ứng xử và xây dựng mối quan hệ tích cực trong cuộc sống.",cover:"cover-one",image:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=700&q=85"},
{id:2,title:"Nhà Giả Kim",author:"Paulo Coelho",category:"Văn học",rating:4.9,status:"available",year:1988,publisher:"NXB Hội Nhà Văn",pages:228,description:"Một câu chuyện giàu tính biểu tượng về hành trình theo đuổi ước mơ và tìm kiếm ý nghĩa của cuộc sống.",cover:"cover-two",image:"https://images.unsplash.com/photo-1511108690759-009cbe5c6e73?auto=format&fit=crop&w=700&q=85"},
{id:3,title:"Tuổi Trẻ Đáng Giá Bao Nhiêu",author:"Rosie Nguyễn",category:"Kỹ năng sống",rating:4.7,status:"borrowed",year:2016,publisher:"NXB Hội Nhà Văn",pages:285,description:"Những góc nhìn thực tế về học tập, trải nghiệm và phát triển bản thân dành cho người trẻ.",cover:"cover-three",image:"https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=700&q=85"},
{id:4,title:"Think and Grow Rich",author:"Napoleon Hill",category:"Kinh tế",rating:4.8,status:"available",year:1937,publisher:"Tổng hợp",pages:238,description:"Những nguyên tắc về tư duy, mục tiêu và hành động được trình bày qua nhiều câu chuyện và bài học.",cover:"cover-four",image:"https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=700&q=85"},
{id:5,title:"Clean Code",author:"Robert C. Martin",category:"Công nghệ",rating:4.8,status:"available",year:2008,publisher:"Prentice Hall",pages:464,description:"Tài liệu kinh điển về cách viết mã nguồn rõ ràng, dễ đọc, dễ bảo trì và có cấu trúc tốt.",cover:"cover-two",image:"https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=700&q=85"},
{id:6,title:"Atomic Habits",author:"James Clear",category:"Kỹ năng sống",rating:4.9,status:"borrowed",year:2018,publisher:"Avery",pages:320,description:"Phương pháp xây dựng thói quen tốt bằng những thay đổi nhỏ và có hệ thống.",cover:"cover-three",image:"https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=700&q=85"},
{id:7,title:"Sapiens",author:"Yuval Noah Harari",category:"Văn học",rating:4.7,status:"available",year:2011,publisher:"Harper",pages:498,description:"Hành trình nhìn lại lịch sử loài người từ những cộng đồng săn bắt hái lượm đến xã hội hiện đại.",cover:"cover-four",image:"https://images.unsplash.com/photo-1526243741027-444d633d7365?auto=format&fit=crop&w=700&q=85"},
{id:8,title:"Marketing 5.0",author:"Philip Kotler",category:"Kinh tế",rating:4.6,status:"available",year:2021,publisher:"Wiley",pages:224,description:"Khám phá cách công nghệ và dữ liệu thay đổi hoạt động marketing trong thời đại mới.",cover:"cover-one",image:"https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=700&q=85"},
{id:9,title:"Muôn Kiếp Nhân Sinh",author:"Nguyên Phong",category:"Tâm lý",rating:4.8,status:"available",year:2020,publisher:"First News",pages:416,description:"Những câu chuyện về nhân quả, lựa chọn và hành trình khám phá chiều sâu của con người.",cover:"cover-two",image:"https://images.unsplash.com/photo-1474932430478-367dbb6832c1?auto=format&fit=crop&w=700&q=85"},
{id:10,title:"Vũ Trụ",author:"Carl Sagan",category:"Khoa học",rating:4.9,status:"available",year:1980,publisher:"Random House",pages:384,description:"Một chuyến du hành đầy cảm hứng qua các vì sao, lịch sử tự nhiên và vị trí của con người trong vũ trụ.",cover:"cover-four",image:"https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=700&q=85"},
{id:11,title:"Lược Sử Thời Gian",author:"Stephen Hawking",category:"Khoa học",rating:4.8,status:"borrowed",year:1988,publisher:"Bantam Books",pages:256,description:"Câu chuyện về không gian, thời gian, hố đen và những câu hỏi lớn nhất của khoa học hiện đại.",cover:"cover-one",image:"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=700&q=85"},
{id:12,title:"Nghệ Thuật Tối Giản",author:"Fumio Sasaki",category:"Nghệ thuật",rating:4.6,status:"available",year:2015,publisher:"W.W. Norton",pages:288,description:"Gợi ý thực tế để sống nhẹ nhàng hơn, tập trung vào điều quan trọng và tìm lại khoảng thở cho tâm trí.",cover:"cover-three",image:"https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=700&q=85"},
{id:13,title:"Dế Mèn Phiêu Lưu Ký",author:"Tô Hoài",category:"Thiếu nhi",rating:4.9,status:"available",year:1941,publisher:"Kim Đồng",pages:180,description:"Cuộc phiêu lưu kinh điển của chú Dế Mèn qua những miền đất và bài học trưởng thành đáng nhớ.",cover:"cover-four",image:"https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=700&q=85"},
{id:14,title:"Đi Tìm Lẽ Sống",author:"Viktor E. Frankl",category:"Tâm lý",rating:4.9,status:"available",year:1946,publisher:"Beacon Press",pages:184,description:"Một góc nhìn sâu sắc về nghị lực, hy vọng và khả năng tìm thấy ý nghĩa ngay trong nghịch cảnh.",cover:"cover-two",image:"https://images.unsplash.com/photo-1455885666463-8d8a5f5f5c97?auto=format&fit=crop&w=700&q=85"},
{id:15,title:"Những Người Khốn Khổ",author:"Victor Hugo",category:"Văn học",rating:4.8,status:"borrowed",year:1862,publisher:"Penguin Classics",pages:1248,description:"Thiên sử thi về tình yêu, lòng trắc ẩn và cuộc đấu tranh tìm kiếm công lý trong xã hội.",cover:"cover-one",image:"https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=700&q=85"},
{id:16,title:"Lịch Sử Việt Nam",author:"Nguyễn Khắc Thuần",category:"Lịch sử",rating:4.7,status:"available",year:2018,publisher:"NXB Giáo Dục",pages:352,description:"Tổng quan sinh động về những dấu mốc, nhân vật và câu chuyện làm nên lịch sử Việt Nam.",cover:"cover-three",image:"https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=700&q=85"},
{id:17,title:"Bố Già",author:"Mario Puzo",category:"Văn học",rating:4.8,status:"available",year:1969,publisher:"G.P. Putnam's Sons",pages:448,description:"Một tiểu thuyết giàu kịch tính về gia đình, quyền lực, lòng trung thành và những lựa chọn khó khăn.",cover:"cover-four",image:"https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=700&q=85"},
{id:18,title:"Nghệ Thuật Đi Khắp Thế Gian",author:"Bill Bryson",category:"Du ký",rating:4.6,status:"available",year:1998,publisher:"Broadway Books",pages:544,description:"Những quan sát dí dỏm và bất ngờ về các vùng đất, con người và nền văn hóa trên thế giới.",cover:"cover-two",image:"https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=700&q=85"},
{id:19,title:"Thiết Kế Của Tương Lai",author:"Don Norman",category:"Công nghệ",rating:4.7,status:"available",year:2013,publisher:"Basic Books",pages:368,description:"Cách công nghệ, thiết kế và tư duy lấy con người làm trung tâm định hình thế giới ngày mai.",cover:"cover-one",image:"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=85"},
{id:20,title:"Tư Duy Nhanh Và Chậm",author:"Daniel Kahneman",category:"Kinh tế",rating:4.8,status:"borrowed",year:2011,publisher:"Farrar, Straus and Giroux",pages:512,description:"Khám phá hai hệ thống tư duy ảnh hưởng đến cách chúng ta phán đoán, lựa chọn và hành động.",cover:"cover-three",image:"https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=700&q=85"},
{id:21,title:"Pride and Prejudice",author:"Jane Austen",category:"Văn học",rating:4.8,status:"available",year:1813,publisher:"Penguin Classics",pages:432,description:"Câu chuyện kinh điển về tình yêu, định kiến và những thay đổi tinh tế trong lòng người.",cover:"cover-four",image:"https://images.unsplash.com/photo-1495640388908-05fa85288e61?auto=format&fit=crop&w=700&q=85"},
{id:22,title:"The Design of Everyday Things",author:"Don Norman",category:"Thiết kế",rating:4.7,status:"available",year:1988,publisher:"MIT Press",pages:368,description:"Tìm hiểu cách những vật dụng quen thuộc có thể trở nên dễ hiểu, hữu ích và thân thiện hơn.",cover:"cover-two",image:"https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=700&q=85"},
{id:23,title:"Cà Phê Cùng Tony",author:"Tony Buổi Sáng",category:"Kỹ năng sống",rating:4.6,status:"borrowed",year:2015,publisher:"NXB Trẻ",pages:268,description:"Những câu chuyện gần gũi về học tập, làm việc, khởi nghiệp và cách sống chủ động của người trẻ.",cover:"cover-one",image:"https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=700&q=85"},
{id:24,title:"Bách Khoa Động Vật",author:"DK Publishing",category:"Thiếu nhi",rating:4.9,status:"available",year:2018,publisher:"DK",pages:208,description:"Cuốn sách hình ảnh giúp độc giả nhỏ tuổi khám phá thế giới động vật đầy màu sắc và kỳ thú.",cover:"cover-three",image:"https://images.unsplash.com/photo-1535930749574-1399327ce78f?auto=format&fit=crop&w=700&q=85"},
{id:25,title:"Homo Deus",author:"Yuval Noah Harari",category:"Lịch sử",rating:4.7,status:"available",year:2015,publisher:"Harper",pages:464,description:"Một góc nhìn rộng mở về tương lai nhân loại, công nghệ và những câu hỏi mà ngày mai đặt ra.",cover:"cover-four",image:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=700&q=85"},
{id:26,title:"Bình Tĩnh Khi Ế, Mạnh Mẽ Khi Yêu",author:"Lê Bích",category:"Tâm lý",rating:4.5,status:"available",year:2019,publisher:"NXB Phụ Nữ",pages:232,description:"Những suy ngẫm nhẹ nhàng về tình yêu, sự tự tin và cách xây dựng một mối quan hệ lành mạnh.",cover:"cover-one",image:"https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=700&q=85"},
{id:27,title:"Nhật Ký Trong Tù",author:"Hồ Chí Minh",category:"Lịch sử",rating:4.9,status:"available",year:1960,publisher:"NXB Văn Học",pages:176,description:"Tập thơ giàu chiều sâu tinh thần, thể hiện nghị lực, niềm tin và vẻ đẹp tâm hồn trong hoàn cảnh khắc nghiệt.",cover:"cover-two",image:"https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=700&q=85"},
{id:28,title:"The Creative Act",author:"Rick Rubin",category:"Nghệ thuật",rating:4.8,status:"available",year:2023,publisher:"Penguin Press",pages:432,description:"Những gợi mở thực tế giúp người sáng tạo quan sát sâu hơn, làm việc tự do hơn và tin vào trực giác.",cover:"cover-three",image:"https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=700&q=85"},
{id:29,title:"Into the Wild",author:"Jon Krakauer",category:"Du ký",rating:4.6,status:"borrowed",year:1996,publisher:"Villard Books",pages:240,description:"Hành trình phiêu lưu có thật đặt ra những câu hỏi về tự do, thiên nhiên và giới hạn của con người.",cover:"cover-four",image:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=700&q=85"},
{id:30,title:"The Pragmatic Programmer",author:"David Thomas",category:"Công nghệ",rating:4.9,status:"available",year:1999,publisher:"Addison-Wesley",pages:352,description:"Những nguyên tắc bền vững giúp lập trình viên viết phần mềm tốt hơn và phát triển nghề nghiệp lâu dài.",cover:"cover-two",image:"https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=700&q=85"}
];

const users = [
{id:"USR-001",name:"Nguyễn Minh Anh",email:"minh.anh@example.com",role:"reader",status:"active",membership:"Thành viên",joinedAt:"2025-11-12",favoriteCategories:["Văn học","Kỹ năng sống"],savedBookIds:[2,6,14],loans:[{bookId:3,status:"active",borrowedAt:"2026-09-18",dueAt:"2026-10-02"},{bookId:15,status:"returned",borrowedAt:"2026-08-10",returnedAt:"2026-08-24"}]},
{id:"USR-002",name:"Trần Quốc Bảo",email:"quoc.bao@example.com",role:"reader",status:"active",membership:"Thành viên thân thiết",joinedAt:"2025-08-04",favoriteCategories:["Công nghệ","Khoa học"],savedBookIds:[5,10,30],loans:[{bookId:11,status:"active",borrowedAt:"2026-09-22",dueAt:"2026-10-06"}]},
{id:"USR-003",name:"Lê Thu Hà",email:"thu.ha@example.com",role:"reader",status:"active",membership:"Thành viên",joinedAt:"2026-01-19",favoriteCategories:["Tâm lý","Nghệ thuật"],savedBookIds:[9,12,26],loans:[{bookId:23,status:"pending",requestedAt:"2026-09-25"},{bookId:20,status:"returned",borrowedAt:"2026-07-02",returnedAt:"2026-07-16"}]},
{id:"USR-004",name:"Phạm Gia Huy",email:"gia.huy@example.com",role:"reader",status:"active",membership:"Thành viên mới",joinedAt:"2026-09-03",favoriteCategories:["Lịch sử","Du ký"],savedBookIds:[16,18,25],loans:[]},
{id:"USR-005",name:"Đỗ Ngọc Lan",email:"ngoc.lan@example.com",role:"reader",status:"inactive",membership:"Thành viên",joinedAt:"2025-04-27",favoriteCategories:["Thiếu nhi","Văn học"],savedBookIds:[13,17,21],loans:[{bookId:29,status:"returned",borrowedAt:"2026-06-11",returnedAt:"2026-06-26"}]}
];

const normalize=(value="")=>value.toLowerCase().replace(/đ/g,"d").normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim();
function header(){
return `<div class="top-bar"><div><i class="fa-solid fa-book-open"></i> Không gian dành cho những người yêu sách</div><div class="top-bar-contact"><span><i class="fa-solid fa-clock"></i> Mở cửa mỗi ngày 8:00 - 21:00</span><span><i class="fa-solid fa-phone"></i> 0123 456 789</span></div></div>
<header><a class="logo" href="index.html" aria-label="Bookin - Trang chủ"><div class="logo-icon"><i class="fa-solid fa-book-open"></i></div><div><strong>BOOKIN</strong><span>Library & beyond</span></div></a><nav class="main-nav"><a href="index.html">Trang chủ</a><a href="books.html">Kho sách <i class="fa-solid fa-chevron-down"></i></a><a href="books.html?category=Văn học">Thể loại</a><a href="index.html#about">Câu chuyện</a><a href="#contact">Liên hệ</a></nav><div class="header-search" role="search"><input id="headerSearchInput" type="search" placeholder="Tìm sách, tác giả, chủ đề..." aria-label="Tìm kiếm sách"><button type="button" class="header-search-btn" aria-label="Tìm kiếm"><i class="fa-solid fa-magnifying-glass"></i></button></div><div class="header-actions"><button class="search-btn" aria-label="Tìm kiếm sách" onclick="location.href='books.html'"><i class="fa-solid fa-magnifying-glass"></i><span>Tìm sách</span></button><button class="login-btn" onclick="location.href='register.html'"><i class="fa-regular fa-user"></i><span>Đăng ký</span></button><button class="menu-toggle" aria-label="Mở menu" aria-expanded="false"><i class="fa-solid fa-bars"></i></button></div><div class="mobile-menu"><a href="index.html">Trang chủ</a><a href="books.html">Kho sách</a><a href="books.html?category=Văn học">Thể loại</a><a href="index.html#about">Câu chuyện</a><a href="#contact">Liên hệ</a></div></header>`;
}
function footer(){
return `<footer id="contact"><div class="footer-main"><div class="footer-brand"><div class="logo"><div class="logo-icon"><i class="fa-solid fa-book-open"></i></div><div><strong>BOOKIN</strong><span>Library</span></div></div><p>Không gian kết nối bạn với thế giới tri thức.</p></div><div><h3>Khám phá</h3><a href="books.html">Kho sách</a><a href="books.html">Thể loại</a><a href="index.html#books">Sách nổi bật</a></div><div><h3>Bookin</h3><a href="index.html#about">Giới thiệu</a><a href="#contact">Liên hệ</a><a href="#">Hỗ trợ</a></div><div><h3>Theo dõi chúng tôi</h3><div class="social"><a href="#"><i class="fa-brands fa-facebook-f"></i></a><a href="#"><i class="fa-brands fa-instagram"></i></a><a href="#"><i class="fa-brands fa-tiktok"></i></a></div></div></div><div class="footer-bottom"><span>© 2026 Bookin Library</span><span>Made with ♥ for book lovers</span></div></footer>`;
}
document.addEventListener("DOMContentLoaded",()=>{document.getElementById("site-header")?.insertAdjacentHTML("afterbegin",header());document.getElementById("site-footer")?.insertAdjacentHTML("afterbegin",footer());const toggle=document.querySelector(".menu-toggle"),menu=document.querySelector(".mobile-menu");toggle?.addEventListener("click",()=>{const open=menu.classList.toggle("is-open");toggle.setAttribute("aria-expanded",open);toggle.innerHTML=open?'<i class="fa-solid fa-xmark"></i>':'<i class="fa-solid fa-bars"></i>';});document.querySelectorAll(".main-nav a, .mobile-menu a").forEach(link=>{if(link.pathname===location.pathname&&!link.hash)link.classList.add("active");});const headerInput=document.getElementById("headerSearchInput");if(headerInput){const submitHeaderSearch=()=>{const value=normalize(headerInput.value);if(value){location.href=`books.html?search=${encodeURIComponent(value)}`;}else{location.href="books.html";}};headerInput.addEventListener("keydown",(event)=>{if(event.key==="Enter"){event.preventDefault();submitHeaderSearch();}});document.querySelector(".header-search-btn")?.addEventListener("click",submitHeaderSearch);}
if(document.getElementById("featuredBooks"))renderFeaturedBooks();if(document.getElementById("bookList"))initLibraryPage();if(document.getElementById("bookDetail"))initBookDetail();});
function initAccountHeader(){
if(!localStorage.getItem("bookin-current-user"))return;
const accountButton=document.querySelector(".login-btn");
if(!accountButton)return;
accountButton.setAttribute("onclick","location.href='profile.html'");
accountButton.setAttribute("aria-label","Trang cá nhân");
const label=accountButton.querySelector("span");if(label)label.textContent="Tài khoản";
}
document.addEventListener("DOMContentLoaded",initAccountHeader);
function normalizeEmail(email){return email.trim().toLowerCase();}
function emailAlreadyRegistered(email){
const normalizedEmail=normalizeEmail(email),registeredUsers=readLocalList("bookin-registered-users"),credentials=readLocalList("bookin-user-credentials");
return [...users,...registeredUsers].some(user=>normalizeEmail(user.email)===normalizedEmail)||credentials.some(credential=>normalizeEmail(credential.email)===normalizedEmail);
}
async function derivePasswordHash(password,saltHex,iterations=120000){
if(!globalThis.crypto?.subtle)throw new Error("secure-crypto-unavailable");
const salt=new Uint8Array(saltHex.match(/.{2}/g).map(byte=>parseInt(byte,16)));
const material=await crypto.subtle.importKey("raw",new TextEncoder().encode(password),"PBKDF2",false,["deriveBits"]);
const bits=await crypto.subtle.deriveBits({name:"PBKDF2",salt,iterations,hash:"SHA-256"},material,256);
return Array.from(new Uint8Array(bits),byte=>byte.toString(16).padStart(2,"0")).join("");
}
async function createCredential(email,password){
const salt=new Uint8Array(16);crypto.getRandomValues(salt);
const saltHex=Array.from(salt,byte=>byte.toString(16).padStart(2,"0")).join("");
return {email,salt:saltHex,hash:await derivePasswordHash(password,saltHex)};
}
function initRegistrationForm(){
const form=document.getElementById("registerForm");
if(!form)return;
const password=document.getElementById("registerPassword"),confirmPassword=document.getElementById("registerConfirm"),emailInput=document.getElementById("registerEmail"),emailFeedback=document.getElementById("registerEmailFeedback"),meterFill=document.getElementById("passwordMeterFill"),meterText=document.getElementById("passwordMeterText"),message=document.getElementById("registerMessage");
const submitButton=form.querySelector('button[type="submit"]');
let submissionInProgress=false;
function validateRegistrationEmail(){
const email=normalizeEmail(emailInput.value);
emailInput.setCustomValidity("");emailFeedback.textContent="";emailFeedback.className="email-feedback";
if(!email)return false;
if(!emailInput.validity.valid){emailFeedback.textContent="Vui lòng nhập email đúng định dạng.";emailFeedback.classList.add("is-error");return false;}
const exists=emailAlreadyRegistered(email);
if(exists){emailInput.setCustomValidity("Email này đã được đăng ký.");emailFeedback.textContent="Email này đã được đăng ký.";emailFeedback.classList.add("is-error");return false;}
emailFeedback.textContent="Email có thể sử dụng.";emailFeedback.classList.add("is-available");return true;
}
emailInput.addEventListener("input",validateRegistrationEmail);
emailInput.addEventListener("blur",validateRegistrationEmail);
function updatePasswordFeedback(){
const value=password.value;
const strength=[value.length>=8,/[A-Za-z]/.test(value),/\d/.test(value),/[^A-Za-z0-9]/.test(value)].filter(Boolean).length;
meterFill.dataset.strength=String(strength);
meterText.textContent=value?(["","Yếu","Trung bình","Khá","Mạnh"][strength]):"Độ mạnh mật khẩu";
confirmPassword.setCustomValidity(confirmPassword.value&&confirmPassword.value!==value?"Mật khẩu xác nhận chưa khớp.":"");
}
password.addEventListener("input",updatePasswordFeedback);
confirmPassword.addEventListener("input",updatePasswordFeedback);
document.querySelectorAll("[data-password-toggle]").forEach(button=>button.addEventListener("click",()=>{
const input=document.getElementById(button.dataset.passwordToggle),visible=input.type==="password";
input.type=visible?"text":"password";
button.setAttribute("aria-label",visible?"Ẩn mật khẩu":"Hiện mật khẩu");
button.innerHTML=visible?'<i class="fa-regular fa-eye-slash" aria-hidden="true"></i>':'<i class="fa-regular fa-eye" aria-hidden="true"></i>';
}));
form.addEventListener("submit",async event=>{
event.preventDefault();
if(submissionInProgress)return;
updatePasswordFeedback();
validateRegistrationEmail();
if(!form.reportValidity())return;
const email=normalizeEmail(emailInput.value),name=document.getElementById("registerName").value.trim();
if(emailAlreadyRegistered(email)){
message.textContent="Email này đã được đăng ký. Hãy đăng nhập hoặc dùng email khác.";
message.classList.add("is-visible");return;
}
submissionInProgress=true;submitButton.disabled=true;
try{
const credential=await createCredential(email,password.value);
if(emailAlreadyRegistered(email)){
message.textContent="Email này vừa được đăng ký ở một phiên khác. Hãy đăng nhập hoặc dùng email khác.";
message.classList.add("is-visible");return;
}
const registeredUsers=readLocalList("bookin-registered-users"),credentials=readLocalList("bookin-user-credentials"),user={id:`USR-${Date.now()}`,name,email,role:"reader",status:"active",membership:"Thành viên mới",joinedAt:new Date().toISOString().slice(0,10),favoriteCategories:[],savedBookIds:[],loans:[]};
writeLocalList("bookin-registered-users",[...registeredUsers,user]);
writeLocalList("bookin-user-credentials",[...credentials,credential]);
localStorage.setItem("bookin-profile",JSON.stringify({name,email}));
localStorage.setItem("bookin-current-user",user.id);
message.innerHTML='Tạo tài khoản thành công trên trình duyệt này. <a href="profile.html">Mở trang cá nhân</a>.';
message.classList.add("is-visible");
form.reset();meterFill.dataset.strength="0";meterText.textContent="Độ mạnh mật khẩu";
}catch{
message.textContent="Không thể lưu tài khoản trên trình duyệt này. Hãy mở trang bằng HTTPS hoặc localhost rồi thử lại.";
message.classList.add("is-visible");
}finally{
submissionInProgress=false;submitButton.disabled=false;
}
});
}
document.addEventListener("DOMContentLoaded",initRegistrationForm);
function initLoginForm(){
const form=document.getElementById("loginForm");
if(!form)return;
const emailInput=document.getElementById("loginEmail"),password=document.getElementById("loginPassword"),message=document.getElementById("loginMessage"),remember=document.querySelector('#loginForm input[name="remember"]');
emailInput.value=localStorage.getItem("bookin-remembered-email")||"";
document.querySelector("[data-login-password-toggle]")?.addEventListener("click",event=>{
const button=event.currentTarget,visible=password.type==="password";
password.type=visible?"text":"password";
button.setAttribute("aria-label",visible?"Ẩn mật khẩu":"Hiện mật khẩu");
button.innerHTML=visible?'<i class="fa-regular fa-eye-slash" aria-hidden="true"></i>':'<i class="fa-regular fa-eye" aria-hidden="true"></i>';
});
form.addEventListener("submit",async event=>{
event.preventDefault();
if(!form.reportValidity())return;
const email=normalizeEmail(emailInput.value),credential=readLocalList("bookin-user-credentials").find(item=>item.email===email),user=readLocalList("bookin-registered-users").find(item=>normalizeEmail(item.email)===email);
if(!credential||!user||user.status!=="active"){
message.textContent="Email hoặc mật khẩu chưa đúng. Tài khoản mẫu chưa thể đăng nhập.";
message.classList.add("is-visible");return;
}
try{
const passwordHash=await derivePasswordHash(password.value,credential.salt,credential.iterations||120000);
if(passwordHash!==credential.hash){message.textContent="Email hoặc mật khẩu chưa đúng.";message.classList.add("is-visible");return;}
localStorage.setItem("bookin-profile",JSON.stringify({name:user.name,email:user.email}));
localStorage.setItem("bookin-current-user",user.id);
if(remember?.checked)localStorage.setItem("bookin-remembered-email",email);else localStorage.removeItem("bookin-remembered-email");
message.innerHTML='Đăng nhập thành công. <a href="profile.html">Mở trang cá nhân</a>.';
message.classList.add("is-visible");
}catch{
message.textContent="Không thể xác minh tài khoản trong trình duyệt này. Hãy mở trang bằng HTTPS hoặc localhost.";
message.classList.add("is-visible");
}
});
document.getElementById("forgotPassword")?.addEventListener("click",()=>{
message.textContent="Đặt lại mật khẩu cần dịch vụ email và máy chủ; chức năng này chưa được cấu hình.";
message.classList.add("is-visible");
});
}
document.addEventListener("DOMContentLoaded",initLoginForm);
function readLocalList(key){
try{const value=JSON.parse(localStorage.getItem(key)||"[]");return Array.isArray(value)?value:[];}catch{return [];}
}
function writeLocalList(key,value){localStorage.setItem(key,JSON.stringify(value));}
function initProfilePage(){
const form=document.getElementById("profileForm");
if(!form)return;
const profileKey="bookin-profile",savedKey="bookin-saved-books",requestsKey="bookin-borrow-requests";
const nameInput=document.getElementById("profileNameInput"),emailInput=document.getElementById("profileEmailInput"),message=document.getElementById("profileMessage");
let profile={name:"",email:""};
try{profile=JSON.parse(localStorage.getItem(profileKey)||"{}");}catch{profile={};}
nameInput.value=profile.name||"";emailInput.value=profile.email||"";
function renderProfile(){
const name=profile.name||"Độc giả Bookin",initials=profile.name?.trim()?profile.name.trim().split(/\s+/).slice(-2).map(part=>part[0]).join("").toUpperCase():"Đ";
document.getElementById("profileGreeting").textContent=profile.name?.trim().split(/\s+/)[0]||"độc giả";
document.getElementById("profileNameDisplay").textContent=name;
document.getElementById("profileEmailDisplay").textContent=profile.email||"Thêm email của bạn";
document.getElementById("profileAvatar").textContent=initials;
const savedIds=readLocalList(savedKey).map(Number),savedBooks=books.filter(book=>savedIds.includes(book.id));
const requests=readLocalList(requestsKey),openRequests=requests.filter(request=>request.type!=="cancelled"&&request.type!=="returned");
document.getElementById("savedBookCount").textContent=savedBooks.length;
document.getElementById("borrowRequestCount").textContent=openRequests.length;
document.getElementById("savedBooksGrid").innerHTML=savedBooks.map(book=>`<div class="profile-saved-item">${card(book)}<button type="button" class="remove-saved" data-remove-book="${book.id}" aria-label="Bỏ lưu ${book.title}"><i class="fa-solid fa-heart-crack"></i></button></div>`).join("");
document.getElementById("savedBooksEmpty").classList.toggle("hidden",savedBooks.length>0);
document.getElementById("profileActivity").innerHTML=requests.length?requests.slice().reverse().slice(0,4).map(request=>{const book=books.find(item=>item.id===Number(request.id));if(!book)return "";const label=request.type==="waitlist"?"Đăng ký chờ":request.type==="cancelled"?"Đã hủy yêu cầu":request.type==="active"?"Đang mượn":"Yêu cầu mượn";return `<article class="activity-item"><span class="activity-icon"><i class="fa-solid fa-book-open"></i></span><div><strong>${book.title}</strong><small>${label} · ${new Date(request.date).toLocaleDateString("vi-VN")}</small></div></article>`;}).join(""):'<p class="activity-empty">Bạn chưa gửi yêu cầu mượn nào.</p>';
}
form.addEventListener("submit",event=>{event.preventDefault();if(!form.reportValidity())return;profile={name:nameInput.value.trim(),email:emailInput.value.trim()};localStorage.setItem(profileKey,JSON.stringify(profile));renderProfile();message.textContent="Thông tin hồ sơ đã được lưu trên thiết bị này.";message.classList.add("is-visible");});
document.getElementById("editProfileButton")?.addEventListener("click",()=>{nameInput.focus();document.getElementById("profileEditPanel").scrollIntoView({behavior:"smooth",block:"center"});});
document.addEventListener("click",event=>{const button=event.target.closest("[data-remove-book]");if(!button)return;const id=Number(button.dataset.removeBook);writeLocalList(savedKey,readLocalList(savedKey).filter(savedId=>Number(savedId)!==id));renderProfile();});
renderProfile();
}
function initBorrowedPage(){
const requestList=document.getElementById("borrowRequestsList");
if(!requestList)return;
const requestsKey="bookin-borrow-requests";
function renderBorrowed(){
const requests=readLocalList(requestsKey).filter(request=>books.some(book=>book.id===Number(request.id)));
const activeLoans=requests.filter(request=>request.type==="active"),pending=requests.filter(request=>request.type==="borrow"||request.type==="waitlist");
document.getElementById("activeLoanCount").textContent=activeLoans.length;
document.getElementById("pendingRequestCount").textContent=pending.length;
document.getElementById("activeLoanLabel").textContent=`${activeLoans.length} cuốn`;
document.getElementById("requestLabel").textContent=`${pending.length} yêu cầu`;
document.getElementById("activeLoansList").innerHTML=activeLoans.map(request=>{
const book=books.find(item=>item.id===Number(request.id));
const dueDate=request.dueDate?new Date(request.dueDate):null;
return `<article class="active-loan"><img src="${book.image}" alt="Bìa sách ${book.title}" loading="lazy"><div class="active-loan-info"><span class="loan-status"><i class="fa-solid fa-circle-check"></i> Đã xác nhận</span><h3>${book.title}</h3><p>${book.author}</p><small>${dueDate?`Hạn trả: ${dueDate.toLocaleDateString("vi-VN")}`:"Chưa có thông tin hạn trả"}</small></div><a href="book-detail.html?id=${book.id}" aria-label="Xem ${book.title}"><i class="fa-solid fa-arrow-up-right-from-square"></i></a></article>`;
}).join("");
document.getElementById("activeLoansEmpty").classList.toggle("hidden",activeLoans.length>0);
requestList.innerHTML=pending.slice().reverse().map(request=>{
const book=books.find(item=>item.id===Number(request.id));
const waiting=request.type==="waitlist";
return `<article class="borrow-request"><div class="request-book-icon"><i class="fa-solid fa-book"></i></div><div class="request-book-info"><h3>${book.title}</h3><p>${book.author}</p><small>${request.date?`Gửi ngày ${new Date(request.date).toLocaleDateString("vi-VN")}`:"Yêu cầu đã lưu trên thiết bị"}</small></div><span class="request-status ${waiting?"waitlist":"pending"}"><i class="fa-solid ${waiting?"fa-clock":"fa-hourglass-half"}"></i> ${waiting?"Đang chờ sách":"Chờ xác nhận"}</span><button type="button" class="cancel-request" data-cancel-request="${request.id}" aria-label="Hủy yêu cầu ${book.title}" title="Hủy yêu cầu"><i class="fa-solid fa-xmark"></i></button></article>`;
}).join("");
document.getElementById("borrowRequestsEmpty").classList.toggle("hidden",pending.length>0);
}
requestList.addEventListener("click",event=>{
const button=event.target.closest("[data-cancel-request]");if(!button)return;
const id=Number(button.dataset.cancelRequest),requests=readLocalList(requestsKey);
const index=requests.findIndex(request=>Number(request.id)===id&&(request.type==="borrow"||request.type==="waitlist"));
if(index!==-1)requests[index]={...requests[index],type:"cancelled",cancelledDate:new Date().toISOString()};
writeLocalList(requestsKey,requests);renderBorrowed();
});
renderBorrowed();
}
function initBorrowHistoryPage(){
const list=document.getElementById("historyList");if(!list)return;
const requestsKey="bookin-borrow-requests",empty=document.getElementById("historyEmpty");
let activeFilter="all";
function classify(request){if(request.type==="active")return "active";if(request.type==="cancelled"||request.type==="returned")return "closed";return "pending";}
function renderHistory(){
const requests=readLocalList(requestsKey).filter(request=>books.some(book=>book.id===Number(request.id))).slice().sort((first,second)=>new Date(second.cancelledDate||second.returnedDate||second.date||0)-new Date(first.cancelledDate||first.returnedDate||first.date||0));
const pending=requests.filter(request=>classify(request)==="pending").length,active=requests.filter(request=>classify(request)==="active").length,closed=requests.filter(request=>classify(request)==="closed").length;
document.getElementById("historyTotal").textContent=requests.length;
document.getElementById("historyPending").textContent=pending;
document.getElementById("historyActive").textContent=active;
document.getElementById("historyClosed").textContent=closed;
const visible=activeFilter==="all"?requests:requests.filter(request=>classify(request)===activeFilter);
list.innerHTML=visible.map(request=>{
const book=books.find(item=>item.id===Number(request.id)),state=classify(request);
const labels={pending:request.type==="waitlist"?"Đang chờ sách":"Chờ xác nhận",active:"Đang mượn",closed:request.type==="returned"?"Đã trả":"Đã hủy"};
const icons={pending:request.type==="waitlist"?"fa-clock":"fa-hourglass-half",active:"fa-book-open",closed:request.type==="returned"?"fa-check":"fa-xmark"};
const eventDate=request.cancelledDate||request.returnedDate||request.date;
return `<article class="history-row"><div class="history-timeline"><span class="history-state-icon ${state}"><i class="fa-solid ${icons[state]}"></i></span></div><img class="history-cover" src="${book.image}" alt="Bìa sách ${book.title}" loading="lazy"><div class="history-book"><span class="history-category">${book.category}</span><h3>${book.title}</h3><p>${book.author}</p><small>${eventDate?new Date(eventDate).toLocaleString("vi-VN",{dateStyle:"medium",timeStyle:"short"}):"Không có ngày ghi nhận"}</small></div><span class="history-status ${state}"><i class="fa-solid ${icons[state]}"></i> ${labels[state]}</span><a class="history-detail" href="book-detail.html?id=${book.id}" aria-label="Xem chi tiết ${book.title}" title="Xem sách"><i class="fa-solid fa-arrow-up-right-from-square"></i></a></article>`;
}).join("");
if(requests.length&&visible.length===0){empty.querySelector("h3").textContent="Không có mục nào trong bộ lọc này";empty.querySelector("p").textContent="Chọn trạng thái khác để xem hoạt động của bạn.";}
else if(!requests.length){empty.querySelector("h3").textContent="Chưa có hoạt động mượn sách";empty.querySelector("p").textContent="Các yêu cầu mượn, đăng ký chờ và trạng thái cập nhật sẽ được lưu lại tại đây.";}
empty.classList.toggle("hidden",visible.length>0);
list.classList.toggle("hidden",visible.length===0);
}
document.querySelectorAll("[data-history-filter]").forEach(button=>button.addEventListener("click",()=>{activeFilter=button.dataset.historyFilter;document.querySelectorAll("[data-history-filter]").forEach(filter=>filter.classList.toggle("is-active",filter===button));renderHistory();}));
renderHistory();
}
document.addEventListener("DOMContentLoaded",()=>{
const headerActions=document.querySelector(".header-actions");
headerActions?.insertAdjacentHTML("afterbegin",'<a class="profile-header-link" href="profile.html" aria-label="Trang cá nhân" title="Trang cá nhân"><i class="fa-regular fa-user"></i></a>');
initProfilePage();
initBorrowedPage();
initBorrowHistoryPage();
document.querySelectorAll(".save-book").forEach(button=>{
const id=Number(new URLSearchParams(location.search).get("id")),saved=readLocalList("bookin-saved-books").map(Number).includes(id);
button.setAttribute("aria-pressed",String(saved));button.setAttribute("aria-label",saved?"Bỏ lưu sách":"Lưu sách");button.innerHTML=saved?'<i class="fa-solid fa-heart"></i>':'<i class="fa-regular fa-heart"></i>';
});
document.addEventListener("click",event=>{
const button=event.target.closest(".save-book");if(!button)return;
const id=Number(new URLSearchParams(location.search).get("id")),savedIds=readLocalList("bookin-saved-books").map(Number),saved=savedIds.includes(id);
writeLocalList("bookin-saved-books",saved?savedIds.filter(savedId=>savedId!==id):[...savedIds,id]);
button.setAttribute("aria-pressed",String(!saved));button.setAttribute("aria-label",saved?"Lưu sách":"Bỏ lưu sách");button.innerHTML=saved?'<i class="fa-regular fa-heart"></i>':'<i class="fa-solid fa-heart"></i>';
});
});
function card(b){
const status=b.status==="available"?'<span class="status available"><i class="fa-solid fa-circle-check"></i> Còn sách</span>':'<span class="status borrowed"><i class="fa-solid fa-clock"></i> Đang mượn</span>';
return `<article class="book-card"><a href="book-detail.html?id=${b.id}"><div class="book-cover ${b.cover}"><img src="${b.image}" alt="Bìa sách ${b.title}" loading="lazy" onerror="this.style.display='none'"><span>${String(b.id).padStart(2,"0")}</span><i class="fa-solid fa-book-open"></i></div></a><div class="book-info"><span class="book-category">${b.category.toUpperCase()}</span><h3>${b.title}</h3><p>${b.author}</p><div class="book-bottom"><div class="book-meta"><span class="book-rating"><i class="fa-solid fa-star"></i> ${b.rating}</span>${status}</div><a href="book-detail.html?id=${b.id}" aria-label="Xem chi tiết"><button><i class="fa-solid fa-arrow-right"></i></button></a></div></div></article>`;
}
function renderFeaturedBooks(){const el=document.getElementById("featuredBooks");if(el)el.innerHTML=books.slice(0,4).map(card).join("")}
function initLibraryPage(){
const list=document.getElementById("bookList"), search=document.getElementById("searchInput"), cat=document.getElementById("categoryFilter"), stat=document.getElementById("statusFilter"), rating=document.getElementById("ratingFilter"), year=document.getElementById("yearFilter"), count=document.getElementById("resultCount"), empty=document.getElementById("emptyState"), emptyMessage=document.getElementById("emptyMessage"), clearBtn=document.getElementById("clearFilters"), emptyReset=document.getElementById("emptyReset"), suggestionWrap=document.getElementById("searchSuggestions"), categoryChips=document.getElementById("categoryChips");
if(!list || !search || !cat || !stat || !rating || !year || !count || !empty) return;
const suggestionTitles=["Đắc Nhân Tâm","Clean Code","Atomic Habits","Sapiens","Homo Deus","Cà Phê Cùng Tony","Đọc theo tâm trạng","Kỹ năng sống","Công nghệ","Văn học"];
if(suggestionWrap){suggestionWrap.innerHTML=suggestionTitles.map(title=>`<button type="button" class="suggestion-tag" data-keyword="${title}">${title}</button>`).join("");suggestionWrap.querySelectorAll(".suggestion-tag").forEach(button=>button.addEventListener("click",()=>{search.value=button.dataset.keyword;render();search.focus();}));}
const categories=[...new Set(books.map(b=>b.category))].sort();
categories.forEach(c=>cat.insertAdjacentHTML("beforeend",`<option value="${c}">${c}</option>`));
if(categoryChips){categoryChips.innerHTML=["",...categories].map(c=>`<button type="button" class="category-chip${c?"":" is-active"}" data-category="${c}">${c||"Tất cả"}</button>`).join("");categoryChips.querySelectorAll(".category-chip").forEach(button=>button.addEventListener("click",()=>{cat.value=button.dataset.category;render();}));}
const params=new URLSearchParams(location.search); if(params.get("category"))cat.value=params.get("category"); if(params.get("search"))search.value=params.get("search");
function render(){
 const q=normalize(search.value), c=cat.value, s=stat.value, ratingValue=Number(rating.value)||0, yearValue=Number(year.value)||0;
 const result=books.filter(b=>{
  const haystack=normalize(`${b.title} ${b.author} ${b.category}`);
  const matchesText=!q || haystack.includes(q);
  const matchesCategory=!c || b.category===c;
  const matchesStatus=!s || b.status===s;
  const matchesRating=!ratingValue || b.rating >= ratingValue;
  const matchesYear=!yearValue || b.year >= yearValue;
  return matchesText && matchesCategory && matchesStatus && matchesRating && matchesYear;
 });
 list.innerHTML=result.map(card).join("");
 count.textContent=`Hiển thị ${result.length} / ${books.length} đầu sách`;
 if(emptyMessage)emptyMessage.textContent=q?`Không có kết quả cho “${search.value.trim()}”. Hãy thử từ khóa ngắn hơn hoặc bỏ dấu.`:"Hãy thử điều chỉnh bộ lọc để xem thêm sách.";
 empty.classList.toggle("hidden",result.length!==0);
 list.classList.toggle("hidden",result.length===0);
 if(categoryChips)categoryChips.querySelectorAll(".category-chip").forEach(button=>button.classList.toggle("is-active",button.dataset.category===c));
}
[search,cat,stat,rating,year].forEach(x=>x.addEventListener("input",render));
search.addEventListener("search",render);
const resetFilters=()=>{search.value="";cat.value="";stat.value="";rating.value="";year.value="";render();};
clearBtn?.addEventListener("click",resetFilters);
emptyReset?.addEventListener("click",resetFilters);
render();
}
function initBookDetail(){const el=document.getElementById("bookDetail"),id=Number(new URLSearchParams(location.search).get("id"))||1,b=books.find(x=>x.id===id)||books[0],related=books.filter(x=>x.category===b.category&&x.id!==b.id).slice(0,3);const status=b.status==="available"?'<span class="status available"><i class="fa-solid fa-circle-check"></i> Đang có sẵn để mượn</span>':'<span class="status borrowed"><i class="fa-solid fa-clock"></i> Đang được mượn</span>';el.innerHTML=`<div class="detail-wrap"><div class="detail-cover-column"><a class="back-link" href="books.html"><i class="fa-solid fa-arrow-left"></i> Quay lại kho sách</a><div class="detail-cover ${b.cover}"><img src="${b.image}" alt="Bìa sách ${b.title}" onerror="this.style.display='none'"><span>${String(b.id).padStart(2,"0")}</span><i class="fa-solid fa-book-open"></i></div><div class="cover-caption"><i class="fa-solid fa-bookmark"></i> Một lựa chọn đáng đọc</div></div><div class="detail-info"><div class="detail-kicker"><span class="book-category">${b.category.toUpperCase()}</span><span class="detail-rating"><i class="fa-solid fa-star"></i> ${b.rating} <small>/ 5</small></span></div><h1>${b.title}</h1><p class="detail-author">Tác giả <strong>${b.author}</strong></p>${status}<p class="detail-desc">${b.description}</p><div class="detail-meta"><div class="meta-item"><small>Nhà xuất bản</small><strong>${b.publisher}</strong></div><div class="meta-item"><small>Năm xuất bản</small><strong>${b.year}</strong></div><div class="meta-item"><small>Số trang</small><strong>${b.pages} trang</strong></div><div class="meta-item"><small>Độc giả đánh giá</small><strong>${b.rating}/5 <span class="stars">★★★★★</span></strong></div></div><div class="detail-actions"><a href="#" class="primary-btn" onclick="borrowBook(${b.id});return false;">${b.status==="available"?"Mượn sách":"Đăng ký chờ"} <i class="fa-solid fa-book-open"></i></a><button class="save-book" aria-label="Lưu sách"><i class="fa-regular fa-heart"></i></button></div><p class="detail-note"><i class="fa-solid fa-shield-heart"></i> Bookin gợi ý đọc chậm, đọc sâu và tìm thấy điều dành riêng cho bạn.</p></div></div>${related.length?`<section class="related-books"><div class="related-heading"><div><span>CÓ THỂ BẠN CŨNG THÍCH</span><h2>Những cuốn sách cùng chủ đề</h2></div><a href="books.html?category=${encodeURIComponent(b.category)}">Xem tất cả <i class="fa-solid fa-arrow-right"></i></a></div><div class="book-grid">${related.map(card).join("")}</div></section>`:""}`}
function borrowBook(id){const book=books.find(item=>item.id===id);if(!book)return;const type=book.status==="available"?"borrow":"waitlist",requests=readLocalList("bookin-borrow-requests");requests.push({id:book.id,type,date:new Date().toISOString()});writeLocalList("bookin-borrow-requests",requests);alert(type==="borrow"?`Đã lưu yêu cầu mượn "${book.title}" trên thiết bị này.`:`Đã lưu yêu cầu chờ "${book.title}" trên thiết bị này.`);}
