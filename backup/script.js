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
const deletedBookIds=new Set(readLocalList("bookin-admin-deleted-books").map(Number));
for(let bookIndex=books.length-1;bookIndex>=0;bookIndex--){if(deletedBookIds.has(books[bookIndex].id))books.splice(bookIndex,1);}
readLocalList("bookin-admin-book-overrides").forEach(savedBook=>{
const index=books.findIndex(book=>book.id===Number(savedBook.id));
if(index===-1)books.push(savedBook);else books[index]={...books[index],...savedBook};
});
books.forEach((book, idx) => {
  if (book.totalQuantity === undefined) book.totalQuantity = (idx % 3 === 0) ? 10 : (idx % 2 === 0) ? 6 : 4;
  if (book.availableQuantity === undefined) book.availableQuantity = book.status === "borrowed" ? 0 : Math.max(1, book.totalQuantity - 2);
});

const users = [
{id:"USR-000",name:"Quản trị viên",email:"admin@bookin.vn",role:"admin",status:"active",membership:"Quản trị viên",joinedAt:"2025-01-01",favoriteCategories:[],savedBookIds:[],loans:[]},
{id:"USR-001",name:"Nguyễn Minh Anh",email:"minh.anh@example.com",role:"reader",status:"active",membership:"Thành viên",joinedAt:"2025-11-12",favoriteCategories:["Văn học","Kỹ năng sống"],savedBookIds:[2,6,14],loans:[{bookId:3,status:"active",borrowedAt:"2026-09-18",dueAt:"2026-10-02"},{bookId:15,status:"returned",borrowedAt:"2026-08-10",returnedAt:"2026-08-24"}]},
{id:"USR-002",name:"Trần Quốc Bảo",email:"quoc.bao@example.com",role:"reader",status:"active",membership:"Thành viên thân thiết",joinedAt:"2025-08-04",favoriteCategories:["Công nghệ","Khoa học"],savedBookIds:[5,10,30],loans:[{bookId:11,status:"active",borrowedAt:"2026-09-22",dueAt:"2026-10-06"}]},
{id:"USR-003",name:"Lê Thu Hà",email:"thu.ha@example.com",role:"reader",status:"active",membership:"Thành viên",joinedAt:"2026-01-19",favoriteCategories:["Tâm lý","Nghệ thuật"],savedBookIds:[9,12,26],loans:[{bookId:23,status:"pending",requestedAt:"2026-09-25"},{bookId:20,status:"returned",borrowedAt:"2026-07-02",returnedAt:"2026-07-16"}]},
{id:"USR-004",name:"Phạm Gia Huy",email:"gia.huy@example.com",role:"reader",status:"active",membership:"Thành viên mới",joinedAt:"2026-09-03",favoriteCategories:["Lịch sử","Du ký"],savedBookIds:[16,18,25],loans:[]},
{id:"USR-005",name:"Đỗ Ngọc Lan",email:"ngoc.lan@example.com",role:"reader",status:"inactive",membership:"Thành viên",joinedAt:"2025-04-27",favoriteCategories:["Thiếu nhi","Văn học"],savedBookIds:[13,17,21],loans:[{bookId:29,status:"returned",borrowedAt:"2026-06-11",returnedAt:"2026-06-26"}]}
];

const normalize=(value="")=>value.toLowerCase().replace(/đ/g,"d").normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim();
function header(){
return `<div class="top-bar"><div><i class="fa-solid fa-book-open"></i> Không gian dành cho những người yêu sách</div><div class="top-bar-contact"><span><i class="fa-solid fa-clock"></i> Mở cửa mỗi ngày 8:00 - 21:00</span><span><i class="fa-solid fa-phone"></i> 0123 456 789</span></div></div>
<header><a class="logo" href="index.html" aria-label="Bookin - Trang chủ"><div class="logo-icon"><i class="fa-solid fa-book-open"></i></div><div><strong>BOOKIN</strong><span>Library & beyond</span></div></a><nav class="main-nav"><a href="index.html">Trang chủ</a><a href="books.html">Kho sách <i class="fa-solid fa-chevron-down"></i></a><a href="books.html?category=Văn học">Thể loại</a><a href="index.html#about">Câu chuyện</a><a href="#contact">Liên hệ</a></nav><div class="header-search" role="search"><input id="headerSearchInput" type="search" placeholder="Tìm sách, tác giả, chủ đề..." aria-label="Tìm kiếm sách"><button type="button" class="header-search-btn" aria-label="Tìm kiếm"><i class="fa-solid fa-magnifying-glass"></i></button></div><div class="header-actions"><button class="search-btn" aria-label="Tìm kiếm sách" onclick="location.href='books.html'"><i class="fa-solid fa-magnifying-glass"></i><span>Tìm sách</span></button><a href="login.html" class="login-btn">
    <i class="fa-regular fa-user"></i>
    <span>Đăng nhập</span>
</a><button class="menu-toggle" aria-label="Mở menu" aria-expanded="false"><i class="fa-solid fa-bars"></i></button></div><div class="mobile-menu"><a href="index.html">Trang chủ</a><a href="books.html">Kho sách</a><a href="books.html?category=Văn học">Thể loại</a><a href="index.html#about">Câu chuyện</a><a href="#contact">Liên hệ</a></div></header>`;
}
function footer(){
return `<footer id="contact"><div class="footer-main"><div class="footer-brand"><div class="logo"><div class="logo-icon"><i class="fa-solid fa-book-open"></i></div><div><strong>BOOKIN</strong><span>Library</span></div></div><p>Không gian kết nối bạn với thế giới tri thức.</p></div><div><h3>Khám phá</h3><a href="books.html">Kho sách</a><a href="books.html">Thể loại</a><a href="index.html#books">Sách nổi bật</a></div><div><h3>Bookin</h3><a href="index.html#about">Giới thiệu</a><a href="#contact">Liên hệ</a><a href="#">Hỗ trợ</a></div><div><h3>Theo dõi chúng tôi</h3><div class="social"><a href="#"><i class="fa-brands fa-facebook-f"></i></a><a href="#"><i class="fa-brands fa-instagram"></i></a><a href="#"><i class="fa-brands fa-tiktok"></i></a></div></div></div><div class="footer-bottom"><span>© 2026 Bookin Library</span><span>Made with ♥ for book lovers</span></div></footer>`;
}
document.addEventListener("DOMContentLoaded",()=>{document.getElementById("site-header")?.insertAdjacentHTML("afterbegin",header());document.getElementById("site-footer")?.insertAdjacentHTML("afterbegin",footer());const toggle=document.querySelector(".menu-toggle"),menu=document.querySelector(".mobile-menu");toggle?.addEventListener("click",()=>{const open=menu.classList.toggle("is-open");toggle.setAttribute("aria-expanded",open);toggle.innerHTML=open?'<i class="fa-solid fa-xmark"></i>':'<i class="fa-solid fa-bars"></i>';});document.querySelectorAll(".main-nav a, .mobile-menu a").forEach(link=>{if(link.pathname===location.pathname&&!link.hash)link.classList.add("active");});const headerInput=document.getElementById("headerSearchInput");if(headerInput){const submitHeaderSearch=()=>{const value=normalize(headerInput.value);if(value){location.href=`books.html?search=${encodeURIComponent(value)}`;}else{location.href="books.html";}};headerInput.addEventListener("keydown",(event)=>{if(event.key==="Enter"){event.preventDefault();submitHeaderSearch();}});document.querySelector(".header-search-btn")?.addEventListener("click",submitHeaderSearch);}
if(document.getElementById("featuredBooks"))renderFeaturedBooks();if(document.getElementById("bookList"))initLibraryPage();if(document.getElementById("bookDetail"))initBookDetail();});
function getLoggedInUser(){
const userId=localStorage.getItem("bookin-current-user"),registered=readLocalList("bookin-registered-users"),allUsers=[...registered,...users];
if(userId){const found=allUsers.find(user=>user.id===userId||normalizeEmail(user.email)===normalizeEmail(userId));if(found)return found;}
const profileRaw=localStorage.getItem("bookin-profile");
if(profileRaw){try{const profile=JSON.parse(profileRaw);if(profile?.email){const found=allUsers.find(user=>normalizeEmail(user.email)===normalizeEmail(profile.email));if(found)return found;}}catch{}}
return null;
}
function isAdminUser(){
const user=getLoggedInUser();
if(!user)return false;
return user.role==="admin"||normalizeEmail(user.email)==="admin@bookin.vn"||normalizeEmail(user.email).startsWith("admin@");
}
function initAccountHeader(){
const user=getLoggedInUser();
if(!user)return;
const accountButton=document.querySelector(".login-btn");
if(!accountButton)return;
accountButton.setAttribute("onclick","location.href='profile.html'");
accountButton.setAttribute("aria-label","Trang cá nhân");
const label=accountButton.querySelector("span");if(label)label.textContent=isAdminUser()?"Admin":"Tài khoản";
if(isAdminUser()&&!document.querySelector(".admin-header-link")){
accountButton.insertAdjacentHTML("beforebegin",'<a class="admin-header-link" href="admin.html" aria-label="Quản trị" title="Trang quản trị" style="margin-right:6px;color:var(--orange-dark);font-weight:700;font-size:12px;display:inline-flex;align-items:center;gap:4px;"><i class="fa-solid fa-shield-halved"></i> <span>Quản trị</span></a>');
}
accountButton.insertAdjacentHTML("afterend",'<button class="header-logout" type="button" aria-label="Đăng xuất" title="Đăng xuất"><i class="fa-solid fa-arrow-right-from-bracket" aria-hidden="true"></i></button>');
document.querySelector(".header-logout")?.addEventListener("click",logoutUser);
}
document.addEventListener("DOMContentLoaded",initAccountHeader);
function logoutUser(){localStorage.removeItem("bookin-current-user");localStorage.removeItem("bookin-profile");location.href="index.html";}
function normalizeEmail(email){return email.trim().toLowerCase();}
function setUserFieldFeedback(input,feedback,text,state="error"){
input.setCustomValidity(text||"");
feedback.textContent=text||"";
feedback.className=`user-field-feedback${text?` is-${state}`:""}`;
}
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
const nameInput=document.getElementById("registerName"),password=document.getElementById("registerPassword"),confirmPassword=document.getElementById("registerConfirm"),emailInput=document.getElementById("registerEmail"),emailFeedback=document.getElementById("registerEmailFeedback"),passwordFeedback=document.getElementById("registerPasswordFeedback"),confirmFeedback=document.getElementById("registerConfirmFeedback"),terms=document.getElementById("registerTerms"),termsFeedback=document.getElementById("registerTermsFeedback"),meterFill=document.getElementById("passwordMeterFill"),meterText=document.getElementById("passwordMeterText"),message=document.getElementById("registerMessage");
const submitButton=form.querySelector('button[type="submit"]');
let submissionInProgress=false;
function validateName(){
const raw=nameInput.value,value=raw.trim(),error=raw&&!value?"Tên không thể chỉ chứa khoảng trắng.":value&&value.length<2?"Tên cần có ít nhất 2 ký tự.":"";
setUserFieldFeedback(nameInput,document.getElementById("registerNameFeedback"),error);
return !error;
}
function validateRegistrationEmail(){
const email=normalizeEmail(emailInput.value);
emailInput.setCustomValidity("");emailFeedback.textContent="";emailFeedback.className="email-feedback";
if(!email)return false;
if(!emailInput.validity.valid){emailInput.setCustomValidity("Vui lòng nhập email đúng định dạng.");emailFeedback.textContent="Vui lòng nhập email đúng định dạng.";emailFeedback.classList.add("is-error");return false;}
const exists=emailAlreadyRegistered(email);
if(exists){emailInput.setCustomValidity("Email này đã được đăng ký.");emailFeedback.textContent="Email này đã được đăng ký.";emailFeedback.classList.add("is-error");return false;}
emailFeedback.textContent="Email có thể sử dụng.";emailFeedback.classList.add("is-available");return true;
}
nameInput.addEventListener("input",validateName);
nameInput.addEventListener("blur",validateName);
nameInput.addEventListener("invalid",()=>{if(!nameInput.value.trim())setUserFieldFeedback(nameInput,document.getElementById("registerNameFeedback"),"Vui lòng nhập họ và tên.");});
emailInput.addEventListener("input",validateRegistrationEmail);
emailInput.addEventListener("blur",validateRegistrationEmail);
emailInput.addEventListener("invalid",()=>{if(!emailInput.value.trim()){emailFeedback.textContent="Vui lòng nhập email.";emailFeedback.className="email-feedback is-error";}else validateRegistrationEmail();});
function updatePasswordFeedback(){
const value=password.value;
const strength=[value.length>=8,/[A-Za-z]/.test(value),/\d/.test(value),/[^A-Za-z0-9]/.test(value)].filter(Boolean).length;
meterFill.dataset.strength=String(strength);
meterText.textContent=value?(["","Yếu","Trung bình","Khá","Mạnh"][strength]):"Độ mạnh mật khẩu";
const passwordError=value&&value.length<8?"Mật khẩu cần có ít nhất 8 ký tự.":"";
setUserFieldFeedback(password,passwordFeedback,passwordError);
const confirmError=confirmPassword.value&&confirmPassword.value!==value?"Mật khẩu xác nhận chưa khớp.":"";
setUserFieldFeedback(confirmPassword,confirmFeedback,confirmError);
}
password.addEventListener("input",updatePasswordFeedback);
password.addEventListener("invalid",()=>{if(!password.value)setUserFieldFeedback(password,passwordFeedback,"Vui lòng nhập mật khẩu.");else updatePasswordFeedback();});
confirmPassword.addEventListener("input",updatePasswordFeedback);
confirmPassword.addEventListener("invalid",()=>{if(!confirmPassword.value)setUserFieldFeedback(confirmPassword,confirmFeedback,"Vui lòng xác nhận mật khẩu.");else updatePasswordFeedback();});
terms.addEventListener("change",()=>setUserFieldFeedback(terms,termsFeedback,terms.checked?"":"Bạn cần đồng ý với điều khoản để tạo tài khoản."));
terms.addEventListener("invalid",()=>{if(!terms.checked)setUserFieldFeedback(terms,termsFeedback,"Bạn cần đồng ý với điều khoản để tạo tài khoản.");});
document.querySelectorAll("[data-password-toggle]").forEach(button=>button.addEventListener("click",()=>{
const input=document.getElementById(button.dataset.passwordToggle),visible=input.type==="password";
input.type=visible?"text":"password";
button.setAttribute("aria-label",visible?"Ẩn mật khẩu":"Hiện mật khẩu");
button.innerHTML=visible?'<i class="fa-regular fa-eye-slash" aria-hidden="true"></i>':'<i class="fa-regular fa-eye" aria-hidden="true"></i>';
}));
form.addEventListener("submit",async event=>{
event.preventDefault();
if(submissionInProgress)return;
validateName();
updatePasswordFeedback();
validateRegistrationEmail();
if(!terms.checked)setUserFieldFeedback(terms,termsFeedback,"Bạn cần đồng ý với điều khoản để tạo tài khoản.");
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
const emailInput=document.getElementById("loginEmail"),password=document.getElementById("loginPassword"),emailFeedback=document.getElementById("loginEmailFeedback"),passwordFeedback=document.getElementById("loginPasswordFeedback"),message=document.getElementById("loginMessage"),remember=document.querySelector('#loginForm input[name="remember"]');
const submitButton=form.querySelector('button[type="submit"]');
let loginInProgress=false;
emailInput.value=localStorage.getItem("bookin-remembered-email")||"";
function validateLoginEmail(){
const value=emailInput.value.trim();
if(!value){setUserFieldFeedback(emailInput,emailFeedback,"");return false;}
const error=emailInput.validity.valid?"":"Email chưa đúng định dạng.";
setUserFieldFeedback(emailInput,emailFeedback,error,error?"error":"valid");return !error;
}
function validateLoginPassword(){
const error=password.value?"":"Vui lòng nhập mật khẩu.";
setUserFieldFeedback(password,passwordFeedback,error);return !error;
}
emailInput.addEventListener("input",validateLoginEmail);
emailInput.addEventListener("blur",validateLoginEmail);
password.addEventListener("input",validateLoginPassword);
password.addEventListener("blur",validateLoginPassword);
emailInput.addEventListener("invalid",()=>{if(!emailInput.value.trim())setUserFieldFeedback(emailInput,emailFeedback,"Vui lòng nhập email.");else validateLoginEmail();});
password.addEventListener("invalid",()=>{if(!password.value)setUserFieldFeedback(password,passwordFeedback,"Vui lòng nhập mật khẩu.");});
document.querySelector("[data-login-password-toggle]")?.addEventListener("click",event=>{
const button=event.currentTarget,visible=password.type==="password";
password.type=visible?"text":"password";
button.setAttribute("aria-label",visible?"Ẩn mật khẩu":"Hiện mật khẩu");
button.innerHTML=visible?'<i class="fa-regular fa-eye-slash" aria-hidden="true"></i>':'<i class="fa-regular fa-eye" aria-hidden="true"></i>';
});
form.addEventListener("submit",async event=>{
event.preventDefault();
if(loginInProgress)return;
validateLoginEmail();validateLoginPassword();
if(!form.reportValidity())return;
const email=normalizeEmail(emailInput.value);
if((email==="admin@bookin.vn"||email==="admin")&&password.value.trim().length>0){
const adminUser={id:"USR-000",name:"Quản trị viên",email:"admin@bookin.vn",role:"admin",status:"active",membership:"Quản trị viên"};
localStorage.setItem("bookin-profile",JSON.stringify({name:adminUser.name,email:adminUser.email}));
localStorage.setItem("bookin-current-user",adminUser.id);
const returnTo=new URLSearchParams(location.search).get("returnTo"),destination=returnTo||"index.html";
message.innerHTML=`Đăng nhập thành công với quyền Chủ thư viện. <a href="${destination}">Chuyển tới bảng điều khiển</a>.`;
message.classList.add("is-visible");
setTimeout(()=>location.href=destination,500);return;
}
const credential=readLocalList("bookin-user-credentials").find(item=>item.email===email),user=readLocalList("bookin-registered-users").find(item=>normalizeEmail(item.email)===email);
if(!credential||!user||user.status!=="active"){
message.textContent="Email hoặc mật khẩu chưa đúng. Tài khoản mẫu chưa thể đăng nhập.";
message.classList.add("is-visible");return;
}
loginInProgress=true;submitButton.disabled=true;
try{
const passwordHash=await derivePasswordHash(password.value,credential.salt,credential.iterations||120000);
if(passwordHash!==credential.hash){message.textContent="Email hoặc mật khẩu chưa đúng.";message.classList.add("is-visible");return;}
localStorage.setItem("bookin-profile",JSON.stringify({name:user.name,email:user.email}));
localStorage.setItem("bookin-current-user",user.id);
if(remember?.checked)localStorage.setItem("bookin-remembered-email",email);else localStorage.removeItem("bookin-remembered-email");
const returnTo=new URLSearchParams(location.search).get("returnTo"),destination=/^book-detail\.html\?id=\d+$/.test(returnTo||"")?returnTo:"profile.html",linkLabel=destination==="profile.html"?"Mở trang cá nhân":"Quay lại cuốn sách";
message.innerHTML=`Đăng nhập thành công. <a href="${destination}">${linkLabel}</a>.`;
message.classList.add("is-visible");
}catch{
message.textContent="Không thể xác minh tài khoản trong trình duyệt này. Hãy mở trang bằng HTTPS hoặc localhost.";
message.classList.add("is-visible");
}finally{
loginInProgress=false;submitButton.disabled=false;
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
function showConfirmDialog({title,message,book,confirmText="Xác nhận xóa",cancelText="Hủy bỏ",isDanger=true,onConfirm}){
document.querySelectorAll(".confirm-delete-dialog").forEach(el=>el.remove());
const dialog=document.createElement("dialog");
dialog.className="borrow-dialog confirm-delete-dialog";
const escapeHTML=value=>String(value??"").replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[char]));
const bookSnippet=book?`<div class="borrow-dialog-book"><img src="${escapeHTML(book.image)}" alt="Bìa sách ${escapeHTML(book.title)}"><div><strong>${escapeHTML(book.title)}</strong><span>Tác giả: ${escapeHTML(book.author)}</span><small>${escapeHTML(book.category)}</small></div></div>`:'';
dialog.innerHTML=`<div class="borrow-dialog-panel"><button class="borrow-dialog-x" type="button" aria-label="Đóng"><i class="fa-solid fa-xmark"></i></button><span class="borrow-dialog-kicker"${isDanger?' style="color:#a45448;"':''}>XÁC NHẬN THAO TÁC</span><h2>${escapeHTML(title)}</h2>${bookSnippet}<p class="borrow-dialog-copy">${escapeHTML(message)}</p><div class="borrow-dialog-actions"><button class="borrow-dialog-cancel" type="button">${escapeHTML(cancelText)}</button><button class="borrow-dialog-confirm ${isDanger?'delete-confirm':''}" type="button">${isDanger?'<i class="fa-solid fa-trash-can"></i> ':''}${escapeHTML(confirmText)}</button></div></div>`;
document.body.append(dialog);
const closeDialog=()=>{dialog.close();dialog.remove();};
dialog.querySelectorAll(".borrow-dialog-cancel,.borrow-dialog-x").forEach(btn=>btn.addEventListener("click",closeDialog));
dialog.addEventListener("click",event=>{if(event.target===dialog)closeDialog();});
dialog.querySelector(".borrow-dialog-confirm").addEventListener("click",()=>{closeDialog();if(typeof onConfirm==="function")onConfirm();});
dialog.showModal();
}
function showNoticeDialog(title,message){
document.querySelectorAll(".notice-dialog").forEach(el=>el.remove());
const dialog=document.createElement("dialog");
dialog.className="borrow-dialog notice-dialog";
const escapeHTML=value=>String(value??"").replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[char]));
dialog.innerHTML=`<div class="borrow-dialog-panel"><button class="borrow-dialog-x" type="button" aria-label="Đóng"><i class="fa-solid fa-xmark"></i></button><span class="borrow-dialog-kicker" style="color:#a45448;">THÔNG BÁO</span><h2>${escapeHTML(title)}</h2><p class="borrow-dialog-copy" style="margin-top:14px;">${escapeHTML(message)}</p><div class="borrow-dialog-actions"><button class="borrow-dialog-confirm" type="button" style="background:#20211f;border-color:#20211f;">Đã hiểu</button></div></div>`;
document.body.append(dialog);
const closeDialog=()=>{dialog.close();dialog.remove();};
dialog.querySelectorAll(".borrow-dialog-confirm,.borrow-dialog-x").forEach(btn=>btn.addEventListener("click",closeDialog));
dialog.addEventListener("click",event=>{if(event.target===dialog)closeDialog();});
dialog.showModal();
}
function setBookInventoryStatus(bookId,status){
const book=books.find(item=>item.id===Number(bookId));if(!book)return;
book.status=status;
const overrides=readLocalList("bookin-admin-book-overrides"),index=overrides.findIndex(item=>Number(item.id)===book.id);
if(index===-1)overrides.push({...book});else overrides[index]={...overrides[index],...book};
writeLocalList("bookin-admin-book-overrides",overrides);
}
function currentUserBorrowRequests(){
const userId=localStorage.getItem("bookin-current-user");
if(!userId)return [];
const requests=readLocalList("bookin-borrow-requests");
let migrated=false;
const scopedRequests=requests.map((request,index)=>{
let scopedRequest=request;
if(!scopedRequest.userId){scopedRequest={...scopedRequest,userId};migrated=true;}
if(!scopedRequest.entryId){scopedRequest={...scopedRequest,entryId:`legacy-${scopedRequest.userId}-${scopedRequest.id}-${scopedRequest.date||index}`};migrated=true;}
return scopedRequest;
});
if(migrated)writeLocalList("bookin-borrow-requests",scopedRequests);
return scopedRequests.filter(request=>request.userId===userId);
}
function appendBorrowEvent(event){
const events=readLocalList("bookin-borrow-events"),eventId=`${event.entryId}:${event.action}`;
if(events.some(item=>item.eventId===eventId))return;
events.push({eventId,userId:event.userId,entryId:event.entryId,bookId:Number(event.bookId),action:event.action,date:event.date,dueDate:event.dueDate||null});
writeLocalList("bookin-borrow-events",events);
}
function currentUserBorrowEvents(){
const userId=localStorage.getItem("bookin-current-user");if(!userId)return [];
const requests=currentUserBorrowRequests(),events=readLocalList("bookin-borrow-events");
let eventsChanged=false;
requests.forEach(request=>{
const initialAction=request.type==="waitlist"||request.previousType==="waitlist"?"waitlist_requested":request.type==="active"||request.type==="returned"?"borrowed":"request_created";
const initialEvent={eventId:`${request.entryId}:${initialAction}`,userId,entryId:request.entryId,bookId:Number(request.id),action:initialAction,date:request.date||new Date().toISOString(),dueDate:request.dueDate||null};
if(!events.some(event=>event.eventId===initialEvent.eventId)){events.push(initialEvent);eventsChanged=true;}
if(request.type==="returned"&&request.returnedDate){const returnEvent={eventId:`${request.entryId}:returned`,userId,entryId:request.entryId,bookId:Number(request.id),action:"returned",date:request.returnedDate};if(!events.some(event=>event.eventId===returnEvent.eventId)){events.push(returnEvent);eventsChanged=true;}}
if(request.type==="cancelled"&&request.cancelledDate){const cancelEvent={eventId:`${request.entryId}:cancelled`,userId,entryId:request.entryId,bookId:Number(request.id),action:"cancelled",date:request.cancelledDate};if(!events.some(event=>event.eventId===cancelEvent.eventId)){events.push(cancelEvent);eventsChanged=true;}}
});
if(eventsChanged)writeLocalList("bookin-borrow-events",events);
return events.filter(event=>event.userId===userId);
}
function currentUserBookRequest(bookId){
return currentUserBorrowRequests().filter(request=>Number(request.id)===Number(bookId)&&["borrow","waitlist","active","returned","cancelled"].includes(request.type)).slice(-1)[0]||null;
}
function borrowRequestPresentation(request){
if(!request)return null;
if(request.type==="active")return {label:"Đang mượn",icon:"fa-book-open",className:"active"};
if(request.type==="waitlist")return {label:"Đang chờ sách",icon:"fa-clock",className:"waitlist"};
if(request.type==="returned")return {label:"Đã trả",icon:"fa-check",className:"returned"};
if(request.type==="cancelled")return {label:"Đã hủy",icon:"fa-xmark",className:"cancelled"};
return {label:"Chờ xác nhận",icon:"fa-hourglass-half",className:"pending"};
}
function initProfilePage(){
const form=document.getElementById("profileForm");
if(!form)return;
const profileKey="bookin-profile",savedKey="bookin-saved-books",requestsKey="bookin-borrow-requests";
const nameInput=document.getElementById("profileNameInput"),emailInput=document.getElementById("profileEmailInput"),nameFeedback=document.getElementById("profileNameFeedback"),emailFeedback=document.getElementById("profileEmailFeedback"),message=document.getElementById("profileMessage"),logoutButton=document.getElementById("logoutButton");
let profile={name:"",email:""};
try{profile=JSON.parse(localStorage.getItem(profileKey)||"{}");}catch{profile={};}
nameInput.value=profile.name||"";emailInput.value=profile.email||"";
if(logoutButton)logoutButton.hidden=!localStorage.getItem("bookin-current-user");
function validateProfileName(){
const value=nameInput.value.trim(),error=value.length<2?"Tên hiển thị cần có ít nhất 2 ký tự.":"";
setUserFieldFeedback(nameInput,nameFeedback,error,error?"error":"valid");return !error;
}
function validateProfileEmail(){
const email=normalizeEmail(emailInput.value),userId=localStorage.getItem("bookin-current-user"),currentUser=readLocalList("bookin-registered-users").find(user=>user.id===userId);
let error="";
if(!email)error="Vui lòng nhập email.";
else if(!emailInput.validity.valid)error="Email chưa đúng định dạng.";
else if(currentUser&&email!==normalizeEmail(currentUser.email)&&emailAlreadyRegistered(email))error="Email này đã được dùng bởi tài khoản khác.";
setUserFieldFeedback(emailInput,emailFeedback,error,error?"error":"valid");return !error;
}
nameInput.addEventListener("input",validateProfileName);nameInput.addEventListener("blur",validateProfileName);
emailInput.addEventListener("input",validateProfileEmail);emailInput.addEventListener("blur",validateProfileEmail);
nameInput.addEventListener("invalid",()=>{if(!nameInput.value.trim())setUserFieldFeedback(nameInput,nameFeedback,"Vui lòng nhập tên hiển thị.");});
emailInput.addEventListener("invalid",()=>{if(!emailInput.value.trim())setUserFieldFeedback(emailInput,emailFeedback,"Vui lòng nhập email.");else validateProfileEmail();});
function renderProfile(){
const name=profile.name||"Độc giả Bookin",initials=profile.name?.trim()?profile.name.trim().split(/\s+/).slice(-2).map(part=>part[0]).join("").toUpperCase():"Đ";
document.getElementById("profileGreeting").textContent=profile.name?.trim().split(/\s+/)[0]||"độc giả";
document.getElementById("profileNameDisplay").textContent=name;
document.getElementById("profileEmailDisplay").textContent=profile.email||"Thêm email của bạn";
document.getElementById("profileAvatar").textContent=initials;
const savedIds=readLocalList(savedKey).map(Number),savedBooks=books.filter(book=>savedIds.includes(book.id));
const requests=currentUserBorrowRequests(),openRequests=requests.filter(request=>request.type!=="cancelled"&&request.type!=="returned");
document.getElementById("savedBookCount").textContent=savedBooks.length;
document.getElementById("borrowRequestCount").textContent=openRequests.length;
document.getElementById("savedBooksGrid").innerHTML=savedBooks.map(book=>`<div class="profile-saved-item">${card(book)}<button type="button" class="remove-saved" data-remove-book="${book.id}" aria-label="Bỏ lưu ${book.title}"><i class="fa-solid fa-heart-crack"></i></button></div>`).join("");
document.getElementById("savedBooksEmpty").classList.toggle("hidden",savedBooks.length>0);
document.getElementById("profileActivity").innerHTML=requests.length?requests.slice().reverse().slice(0,4).map(request=>{const book=books.find(item=>item.id===Number(request.id));if(!book)return "";const label=request.type==="waitlist"?"Đăng ký chờ":request.type==="cancelled"?"Đã hủy yêu cầu":request.type==="returned"?"Đã trả":request.type==="active"?"Đang mượn":"Yêu cầu mượn";return `<article class="activity-item"><span class="activity-icon"><i class="fa-solid fa-book-open"></i></span><div><strong>${book.title}</strong><small>${label} · ${new Date(request.returnedDate||request.date).toLocaleDateString("vi-VN")}</small></div></article>`;}).join(""):'<p class="activity-empty">Bạn chưa gửi yêu cầu mượn nào.</p>';
}
form.addEventListener("submit",event=>{
event.preventDefault();validateProfileName();validateProfileEmail();if(!form.reportValidity())return;
const nextProfile={name:nameInput.value.trim(),email:normalizeEmail(emailInput.value)},currentUserId=localStorage.getItem("bookin-current-user"),registeredUsers=readLocalList("bookin-registered-users"),currentUser=registeredUsers.find(user=>user.id===currentUserId);
if(currentUser&&nextProfile.email!==normalizeEmail(currentUser.email)&&emailAlreadyRegistered(nextProfile.email)){
message.textContent="Email này đã được dùng bởi tài khoản khác.";message.classList.add("is-visible");return;
}
if(currentUser){
const previousEmail=normalizeEmail(currentUser.email);currentUser.name=nextProfile.name;currentUser.email=nextProfile.email;
writeLocalList("bookin-registered-users",registeredUsers);
const credentials=readLocalList("bookin-user-credentials");credentials.forEach(credential=>{if(normalizeEmail(credential.email)===previousEmail)credential.email=nextProfile.email;});
writeLocalList("bookin-user-credentials",credentials);
if(localStorage.getItem("bookin-remembered-email")===previousEmail)localStorage.setItem("bookin-remembered-email",nextProfile.email);
}
profile=nextProfile;localStorage.setItem(profileKey,JSON.stringify(profile));renderProfile();message.textContent="Thông tin hồ sơ đã được lưu trên thiết bị này.";message.classList.add("is-visible");
});
document.getElementById("editProfileButton")?.addEventListener("click",()=>{nameInput.focus();document.getElementById("profileEditPanel").scrollIntoView({behavior:"smooth",block:"center"});});
logoutButton?.addEventListener("click",logoutUser);
document.addEventListener("click",event=>{const button=event.target.closest("[data-remove-book]");if(!button)return;const id=Number(button.dataset.removeBook);writeLocalList(savedKey,readLocalList(savedKey).filter(savedId=>Number(savedId)!==id));renderProfile();});
renderProfile();
}
function initBorrowedPage(){
const requestList=document.getElementById("borrowRequestsList");
if(!requestList)return;
const requestsKey="bookin-borrow-requests";
function renderBorrowed(){
const requests=currentUserBorrowRequests().filter(request=>books.some(book=>book.id===Number(request.id)));
const activeLoans=requests.filter(request=>request.type==="active"),pending=requests.filter(request=>request.type==="borrow"||request.type==="waitlist");
document.getElementById("activeLoanCount").textContent=activeLoans.length;
document.getElementById("pendingRequestCount").textContent=pending.length;
document.getElementById("activeLoanLabel").textContent=`${activeLoans.length} cuốn`;
document.getElementById("requestLabel").textContent=`${pending.length} yêu cầu`;
document.getElementById("activeLoansList").innerHTML=activeLoans.map(request=>{
const book=books.find(item=>item.id===Number(request.id));
const dueDate=request.dueDate?new Date(request.dueDate):null;
const today=new Date();today.setHours(0,0,0,0);
const dueDay=dueDate?new Date(dueDate):null;if(dueDay)dueDay.setHours(0,0,0,0);
const daysLeft=dueDay?Math.ceil((dueDay-today)/86400000):null;
const dueState=daysLeft===null?"unknown":daysLeft<0?"overdue":daysLeft<=2?"soon":"normal";
const dueText=daysLeft===null?"Chưa có hạn trả":daysLeft<0?`Quá hạn ${Math.abs(daysLeft)} ngày`:daysLeft===0?"Hạn trả hôm nay":`Còn ${daysLeft} ngày`;
return `<article class="active-loan"><img src="${book.image}" alt="Bìa sách ${book.title}" loading="lazy"><div class="active-loan-info"><span class="loan-status"><i class="fa-solid fa-circle-check"></i> Đang mượn</span><h3>${book.title}</h3><p>${book.author}</p><small>${dueDate?`Hạn trả dự kiến: ${dueDate.toLocaleDateString("vi-VN")}`:"Chưa có thông tin hạn trả"}</small><span class="loan-due-indicator ${dueState}"><i class="fa-regular fa-clock"></i> ${dueText}</span></div><a href="book-detail.html?id=${book.id}" aria-label="Xem ${book.title}" title="Xem sách"><i class="fa-solid fa-arrow-up-right-from-square"></i></a><button type="button" class="return-loan" data-return-loan="${book.id}"><i class="fa-solid fa-arrow-rotate-left"></i> Trả sách</button></article>`;
}).join("");
document.getElementById("activeLoansEmpty").classList.toggle("hidden",activeLoans.length>0);
requestList.innerHTML=pending.slice().reverse().map(request=>{
const book=books.find(item=>item.id===Number(request.id));
const waiting=request.type==="waitlist";
return `<article class="borrow-request"><div class="request-book-icon"><i class="fa-solid fa-book"></i></div><div class="request-book-info"><h3>${book.title}</h3><p>${book.author}</p><small>${request.date?`Gửi ngày ${new Date(request.date).toLocaleDateString("vi-VN")}`:"Yêu cầu đã lưu trên thiết bị"}</small></div><span class="request-status ${waiting?"waitlist":"pending"}"><i class="fa-solid ${waiting?"fa-clock":"fa-hourglass-half"}"></i> ${waiting?"Đang chờ sách":"Chờ xác nhận"}</span><button type="button" class="cancel-request" data-cancel-request="${request.id}" aria-label="Hủy yêu cầu ${book.title}" title="Hủy yêu cầu"><i class="fa-solid fa-xmark"></i></button></article>`;
}).join("");
document.getElementById("borrowRequestsEmpty").classList.toggle("hidden",pending.length>0);
}
document.getElementById("activeLoansList").addEventListener("click",event=>{
const button=event.target.closest("[data-return-loan]");if(!button)return;
const book=books.find(item=>item.id===Number(button.dataset.returnLoan));if(!book)return;
const dialog=document.createElement("dialog");dialog.className="borrow-dialog return-dialog";
dialog.innerHTML=`<div class="borrow-dialog-panel"><button class="borrow-dialog-x" type="button" aria-label="Đóng"><i class="fa-solid fa-xmark"></i></button><span class="borrow-dialog-kicker">BOOKIN READING CLUB</span><h2>Xác nhận trả sách</h2><p class="borrow-dialog-copy">Đánh dấu “${book.title}” là đã trả? Sách sẽ được chuyển vào lịch sử mượn.</p><div class="borrow-dialog-actions"><button class="borrow-dialog-cancel" type="button">Giữ sách</button><button class="borrow-dialog-confirm return-confirm" type="button">Xác nhận trả</button></div></div>`;
document.body.append(dialog);
const closeDialog=()=>dialog.close();
dialog.querySelectorAll(".borrow-dialog-cancel,.borrow-dialog-x").forEach(control=>control.addEventListener("click",closeDialog));
dialog.addEventListener("click",event=>{if(event.target===dialog)closeDialog();});
dialog.querySelector(".return-confirm").addEventListener("click",()=>{
const userId=localStorage.getItem("bookin-current-user"),requests=readLocalList(requestsKey),index=requests.findIndex(request=>request.userId===userId&&Number(request.id)===book.id&&request.type==="active");
if(index!==-1){const returnedDate=new Date().toISOString();requests[index]={...requests[index],type:"returned",returnedDate};writeLocalList(requestsKey,requests);appendBorrowEvent({userId,entryId:requests[index].entryId,bookId:book.id,action:"returned",date:returnedDate});const stillBorrowed=requests.some(request=>Number(request.id)===book.id&&request.type==="active");setBookInventoryStatus(book.id,stillBorrowed?"borrowed":"available");}
closeDialog();renderBorrowed();
});
dialog.showModal();
});
requestList.addEventListener("click",event=>{
const button=event.target.closest("[data-cancel-request]");if(!button)return;
const id=Number(button.dataset.cancelRequest),userId=localStorage.getItem("bookin-current-user"),requests=readLocalList(requestsKey);
const index=requests.findIndex(request=>request.userId===userId&&Number(request.id)===id&&(request.type==="borrow"||request.type==="waitlist"));
if(index===-1)return;
const book=books.find(item=>item.id===id);
showConfirmDialog({
title:"Hủy yêu cầu mượn",
message:"Bạn có chắc chắn muốn hủy yêu cầu mượn cuốn sách này?",
book:book,
confirmText:"Hủy yêu cầu",
cancelText:"Quay lại",
isDanger:true,
onConfirm:()=>{
const cancelledDate=new Date().toISOString(),previousType=requests[index].type;
requests[index]={...requests[index],type:"cancelled",previousType,cancelledDate};
appendBorrowEvent({userId,entryId:requests[index].entryId,bookId:id,action:"cancelled",date:cancelledDate});
writeLocalList(requestsKey,requests);renderBorrowed();
}
});
});
renderBorrowed();
}
function initBorrowHistoryPage(){
const list=document.getElementById("historyList");if(!list)return;
const empty=document.getElementById("historyEmpty");
let activeFilter="all";
function classifyEvent(event,activeEntries,currentRequests){
if(event.action==="borrowed")return activeEntries.has(event.entryId)?"active":"closed";
if(event.action==="returned"||event.action==="cancelled")return "closed";
const request=currentRequests.get(event.entryId);
return request&&(request.type==="borrow"||request.type==="waitlist")?"pending":"closed";
}
function renderHistory(){
const requests=currentUserBorrowRequests().filter(request=>books.some(book=>book.id===Number(request.id))),currentRequests=new Map(requests.map(request=>[request.entryId,request])),activeEntries=new Set(requests.filter(request=>request.type==="active").map(request=>request.entryId));
const events=currentUserBorrowEvents().filter(event=>books.some(book=>book.id===Number(event.bookId))).slice().sort((first,second)=>new Date(second.date)-new Date(first.date));
const pending=requests.filter(request=>request.type==="borrow"||request.type==="waitlist").length,active=requests.filter(request=>request.type==="active").length,closed=events.filter(event=>event.action==="returned"||event.action==="cancelled").length;
document.getElementById("historyTotal").textContent=events.length;
document.getElementById("historyPending").textContent=pending;
document.getElementById("historyActive").textContent=active;
document.getElementById("historyClosed").textContent=closed;
const visible=events.filter(event=>activeFilter==="all"||classifyEvent(event,activeEntries,currentRequests)===activeFilter);
list.innerHTML=visible.map(event=>{
const book=books.find(item=>item.id===Number(event.bookId)),state=classifyEvent(event,activeEntries,currentRequests);
const labels={borrowed:state==="active"?"Đang mượn":"Đã mượn",returned:"Đã trả",cancelled:"Đã hủy",waitlist_requested:"Đăng ký chờ",request_created:"Yêu cầu mượn"};
const icons={borrowed:"fa-book-open",returned:"fa-check",cancelled:"fa-xmark",waitlist_requested:"fa-clock",request_created:"fa-hourglass-half"};
return `<article class="history-row"><div class="history-timeline"><span class="history-state-icon ${state}"><i class="fa-solid ${icons[event.action]||"fa-book"}"></i></span></div><img class="history-cover" src="${book.image}" alt="Bìa sách ${book.title}" loading="lazy"><div class="history-book"><span class="history-category">${book.category}</span><h3>${book.title}</h3><p>${book.author}</p><small>${event.date?new Date(event.date).toLocaleString("vi-VN",{dateStyle:"medium",timeStyle:"short"}):"Không có ngày ghi nhận"}</small></div><span class="history-status ${state}"><i class="fa-solid ${icons[event.action]||"fa-book"}"></i> ${labels[event.action]||"Cập nhật"}</span><a class="history-detail" href="book-detail.html?id=${book.id}" aria-label="Xem chi tiết ${book.title}" title="Xem sách"><i class="fa-solid fa-arrow-up-right-from-square"></i></a></article>`;
}).join("");
if(events.length&&visible.length===0){empty.querySelector("h3").textContent="Không có mục nào trong bộ lọc này";empty.querySelector("p").textContent="Chọn trạng thái khác để xem hoạt động của bạn.";}
else if(!events.length){empty.querySelector("h3").textContent="Chưa có hoạt động mượn sách";empty.querySelector("p").textContent="Mỗi lần mượn, đăng ký chờ, hủy hoặc trả sách sẽ được lưu thành một mốc lịch sử.";}
empty.classList.toggle("hidden",visible.length>0);
list.classList.toggle("hidden",visible.length===0);
}
document.querySelectorAll("[data-history-filter]").forEach(button=>button.addEventListener("click",()=>{activeFilter=button.dataset.historyFilter;document.querySelectorAll("[data-history-filter]").forEach(filter=>filter.classList.toggle("is-active",filter===button));renderHistory();}));
renderHistory();
}
function initAdminPage(){
const tableWrap=document.getElementById("adminTableWrap");if(!tableWrap)return;
const adminMain=document.querySelector(".admin-main");
if(!isAdminUser()){
if(adminMain){
adminMain.innerHTML=`<section class="admin-unauthorized"><div class="admin-unauthorized-card"><div class="admin-unauthorized-badge"><i class="fa-solid fa-user-lock"></i></div><h2>Yêu cầu quyền Quản trị viên</h2><p>Trang này chỉ dành cho tài khoản có quyền <strong>Quản trị (Admin)</strong>. Bạn hiện chưa đăng nhập bằng tài khoản Admin.</p><div class="admin-demo-account-hint"><span><i class="fa-solid fa-key"></i> Tài khoản Admin mẫu: <strong>admin@bookin.vn</strong></span></div><div class="admin-unauthorized-actions"><a href="index.html" class="secondary-btn"><i class="fa-solid fa-house"></i> Về trang chủ</a><button type="button" id="adminQuickLoginBtn" class="primary-btn"><i class="fa-solid fa-shield-halved"></i> Đăng nhập Admin mẫu</button></div></div></section>`;
document.getElementById("adminQuickLoginBtn")?.addEventListener("click",()=>{
const adminUser={id:"USR-000",name:"Quản trị viên",email:"admin@bookin.vn",role:"admin",status:"active",membership:"Quản trị viên"};
localStorage.setItem("bookin-profile",JSON.stringify({name:adminUser.name,email:adminUser.email}));
localStorage.setItem("bookin-current-user",adminUser.id);
location.reload();
});
}
return;
}
const eyebrow=document.querySelector(".admin-eyebrow");
if(eyebrow)eyebrow.innerHTML='<i class="fa-solid fa-shield-halved"></i> BOOKIN · ĐIỀU HÀNH (ĐÃ XÁC THỰC ADMIN)';
const searchInput=document.getElementById("adminSearch"),statusFilter=document.getElementById("adminStatusFilter"),empty=document.getElementById("adminEmpty");
const addBookButton=document.getElementById("adminAddBook"),bookDialog=document.getElementById("adminBookDialog"),bookForm=document.getElementById("adminBookForm"),bookFormMessage=document.getElementById("adminBookFormMessage");
let activeTab="loans";
const escapeHTML=value=>String(value??"").replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[char]));
const allReaders=()=>{const registered=readLocalList("bookin-registered-users"),emails=new Set(registered.map(user=>normalizeEmail(user.email)));return [...registered,...users.filter(user=>!emails.has(normalizeEmail(user.email)))];};
function getAdminLoanRows(){
const stored=readLocalList("bookin-borrow-requests").map(request=>({...request,source:"local"}));
const samples=users.flatMap(user=>user.loans.map((loan,index)=>({id:loan.bookId,userId:user.id,entryId:`sample-${user.id}-${loan.bookId}-${index}`,type:loan.status==="pending"?"borrow":loan.status,date:loan.returnedAt||loan.borrowedAt||loan.requestedAt,dueDate:loan.dueAt,source:"sample"})));
return [...stored,...samples];
}
function updateStats(){
const requests=getAdminLoanRows(),readers=allReaders();
const totalTitles=books.length;
const totalCopies=books.reduce((sum,b)=>sum+Number(b.totalQuantity||5),0);
const availableCopies=books.reduce((sum,b)=>sum+Number(b.availableQuantity??(b.status==="available"?4:0)),0);
const activeLoans=requests.filter(request=>request.type==="active").length;
const pendingRequests=requests.filter(request=>request.type==="borrow"||request.type==="waitlist").length;

document.getElementById("adminBookCount").textContent=totalTitles;
document.getElementById("adminUserCount").textContent=totalCopies;
document.getElementById("adminActiveCount").textContent=availableCopies;
document.getElementById("adminPendingCount").textContent=activeLoans;

const stockNote=document.getElementById("adminStockNote");if(stockNote)stockNote.textContent=`${totalTitles} danh mục đầu sách`;
const userNote=document.getElementById("adminUserNote");if(userNote)userNote.textContent=`Tổng lượng bản sao trong kho`;
const activeNote=document.getElementById("adminActiveNote");if(activeNote)activeNote.textContent=`Sẵn sàng cho mượn trên kệ`;
const pendingNote=document.getElementById("adminPendingNote");if(pendingNote)pendingNote.textContent=`${pendingRequests} yêu cầu mượn chờ duyệt`;
}
function updateStatusOptions(){
const options={loans:[["all","Tất cả trạng thái"],["borrow","Chờ xác nhận"],["waitlist","Đăng ký chờ"],["active","Đang mượn"],["returned","Đã trả"],["cancelled","Đã hủy"]],books:[["all","Tất cả tình trạng"],["available","Còn sách"],["borrowed","Đang mượn"]],users:[["all","Tất cả trạng thái"],["active","Đang hoạt động"],["inactive","Ngừng hoạt động"]]};
statusFilter.innerHTML=options[activeTab].map(([value,label])=>`<option value="${value}">${label}</option>`).join("");
const searchHints={loans:"Tìm theo sách, người đọc, email...",books:"Tìm tên sách, tác giả, thể loại...",users:"Tìm theo tên, email, mã thành viên..."};
searchInput.placeholder=searchHints[activeTab];
searchInput.setAttribute("aria-label",searchHints[activeTab]);
addBookButton.hidden=activeTab!=="books";
}
function renderBooks(){
const query=normalize(searchInput.value),status=statusFilter.value;
const filtered=books.filter(book=>(!query||normalize(`${book.title} ${book.author} ${book.category}`).includes(query))&&(status==="all"||book.status===status));
return `<table><thead><tr><th>Đầu sách</th><th>Thể loại</th><th>Năm</th><th>Số lượng tồn kho</th><th>Tình trạng</th><th>Thao tác</th></tr></thead><tbody>${filtered.map(book=>{
  const avail=Number(book.availableQuantity??(book.status==="available"?4:0));
  const total=Number(book.totalQuantity??5);
  const badgeClass=avail>2?"high":avail>0?"low":"empty";
  const badgeText=avail>2?`Còn ${avail}/${total} cuốn`:avail>0?`Sắp hết (${avail}/${total})`:`Hết hàng (0/${total})`;
  return `<tr><td><div class="admin-book-cell"><img src="${book.image}" alt="" loading="lazy"><div><strong>${escapeHTML(book.title)}</strong><small>${escapeHTML(book.author)}</small></div></div></td><td>${escapeHTML(book.category)}</td><td>${book.year}</td><td><span class="admin-stock-badge ${badgeClass}"><i class="fa-solid ${avail>0?'fa-boxes-stacked':'fa-triangle-exclamation'}"></i> ${badgeText}</span></td><td><span class="admin-status ${avail>0?'available':'borrowed'}">${avail>0?'Còn trên kệ':'Tạm hết'}</span></td><td><div class="admin-book-actions"><button class="admin-action edit-book" type="button" data-book-action="edit" data-book-id="${book.id}"><i class="fa-solid fa-pen"></i> Sửa</button><button class="admin-action delete-book" type="button" data-book-action="delete" data-book-id="${book.id}"><i class="fa-solid fa-trash-can"></i> Xóa</button></div></td></tr>`;
}).join("")}</tbody></table>`;
}
function renderReaders(){
const query=normalize(searchInput.value),status=statusFilter.value;
const filtered=allReaders().filter(user=>(!query||normalize(`${user.name} ${user.email} ${user.id}`).includes(query))&&(status==="all"||user.status===status));
return `<table><thead><tr><th>Người đọc</th><th>Mã thành viên</th><th>Hạng</th><th>Ngày tham gia</th><th>Trạng thái</th></tr></thead><tbody>${filtered.map(user=>`<tr><td><div class="admin-reader-cell"><span>${escapeHTML(user.name.trim().split(/\s+/).slice(-2).map(part=>part[0]).join("").toUpperCase())}</span><div><strong>${escapeHTML(user.name)}</strong><small>${escapeHTML(user.email)}</small></div></div></td><td>${escapeHTML(user.id)}</td><td>${escapeHTML(user.membership||"Thành viên")}</td><td>${user.joinedAt?new Date(user.joinedAt).toLocaleDateString("vi-VN"):"—"}</td><td><span class="admin-user-status ${user.status}">${user.status==="active"?"Hoạt động":"Ngừng hoạt động"}</span></td></tr>`).join("")}</tbody></table>`;
}
function renderLoans(){
const query=normalize(searchInput.value),status=statusFilter.value,requests=getAdminLoanRows();
const readers=allReaders(),readerById=new Map(readers.map(user=>[user.id,user]));
const filtered=requests.filter(request=>{const book=books.find(item=>item.id===Number(request.id)),reader=readerById.get(request.userId);return book&&(!query||normalize(`${book.title} ${book.author} ${reader?.name||""} ${reader?.email||""}`).includes(query))&&(status==="all"||request.type===status);}).slice().sort((first,second)=>new Date(second.date||0)-new Date(first.date||0));
const labels={borrow:"Chờ xác nhận",waitlist:"Đăng ký chờ",active:"Đang mượn",returned:"Đã trả",cancelled:"Đã hủy"};
return `<table><thead><tr><th>Người đọc</th><th>Sách</th><th>Yêu cầu</th><th>Hạn trả</th><th>Trạng thái</th><th>Thao tác</th></tr></thead><tbody>${filtered.map(request=>{const book=books.find(item=>item.id===Number(request.id)),reader=readerById.get(request.userId),entryId=request.entryId||`${request.userId}-${request.id}-${request.date}`;const action=request.source==="sample"?'<span class="admin-no-action">Dữ liệu mẫu</span>':request.type==="borrow"?`<button class="admin-action approve" data-loan-action="approve" data-entry-id="${escapeHTML(entryId)}"><i class="fa-solid fa-check"></i> Xác nhận mượn</button>`:request.type==="waitlist"&&book.status==="available"?`<button class="admin-action approve" data-loan-action="approve" data-entry-id="${escapeHTML(entryId)}"><i class="fa-solid fa-check"></i> Cấp sách</button>`:request.type==="active"?`<button class="admin-action return" data-loan-action="return" data-entry-id="${escapeHTML(entryId)}"><i class="fa-solid fa-arrow-rotate-left"></i> Ghi nhận trả</button>`:request.type==="waitlist"?'<span class="admin-no-action">Chờ sách sẵn</span>':'<span class="admin-no-action">—</span>';return `<tr><td><strong>${escapeHTML(reader?.name||"Khách cũ")}</strong><small class="admin-cell-sub">${escapeHTML(reader?.email||request.userId||"Chưa có tài khoản")}${request.source==="sample"?" · Mẫu":""}</small></td><td><strong>${escapeHTML(book.title)}</strong><small class="admin-cell-sub">${escapeHTML(book.author)}</small></td><td>${request.type==="waitlist"?"Chờ sách":"Mượn"}</td><td>${request.dueDate?new Date(request.dueDate).toLocaleDateString("vi-VN"):"—"}</td><td><span class="admin-loan-status ${request.type}">${labels[request.type]||request.type}</span></td><td>${action}</td></tr>`;}).join("")}</tbody></table>`;
}
function renderAdmin(){
updateStats();
tableWrap.innerHTML=activeTab==="books"?renderBooks():activeTab==="users"?renderReaders():renderLoans();
const resultCount=tableWrap.querySelectorAll("tbody tr").length,labels={books:"đầu sách",users:"người đọc",loans:"giao dịch"};
document.getElementById("adminResultCount").textContent=`${resultCount} ${labels[activeTab]}`;
empty.classList.toggle("hidden",resultCount>0);
tableWrap.classList.toggle("hidden",resultCount===0);
}
function updateRequest(entryId,action){
const requests=readLocalList("bookin-borrow-requests"),index=requests.findIndex(request=>(request.entryId||`${request.userId}-${request.id}-${request.date}`)===entryId);if(index===-1)return;
const request=requests[index],book=books.find(item=>item.id===Number(request.id));if(!book)return;
const now=new Date(),date=now.toISOString();
if(action==="approve"&&(request.type==="borrow"||request.type==="waitlist")){
const dueDate=new Date(now);dueDate.setDate(dueDate.getDate()+14);
request.type="active";request.entryId=request.entryId||entryId;request.borrowedAt=date;request.dueDate=dueDate.toISOString();
appendBorrowEvent({userId:request.userId,entryId:request.entryId,bookId:book.id,action:"borrowed",date,dueDate:request.dueDate});
book.availableQuantity=Math.max(0,(book.availableQuantity??5)-1);
book.status=book.availableQuantity>0?"available":"borrowed";
const overrides=readLocalList("bookin-admin-book-overrides"),ovIdx=overrides.findIndex(item=>Number(item.id)===book.id);
if(ovIdx===-1)overrides.push(book);else overrides[ovIdx]=book;
writeLocalList("bookin-admin-book-overrides",overrides);
}else if(action==="return"&&request.type==="active"){
request.type="returned";request.returnedDate=date;
appendBorrowEvent({userId:request.userId,entryId:request.entryId,bookId:book.id,action:"returned",date});
book.availableQuantity=Math.min(book.totalQuantity||5,(book.availableQuantity??0)+1);
book.status=book.availableQuantity>0?"available":"borrowed";
const overrides=readLocalList("bookin-admin-book-overrides"),ovIdx=overrides.findIndex(item=>Number(item.id)===book.id);
if(ovIdx===-1)overrides.push(book);else overrides[ovIdx]=book;
writeLocalList("bookin-admin-book-overrides",overrides);
}else return;
writeLocalList("bookin-borrow-requests",requests);renderAdmin();
}
function deleteBook(bookId){
const book=books.find(item=>item.id===Number(bookId));if(!book)return;
const hasTransactions=readLocalList("bookin-borrow-requests").some(request=>Number(request.id)===book.id)||readLocalList("bookin-borrow-events").some(event=>Number(event.bookId)===book.id);
if(hasTransactions){
showNoticeDialog("Không thể xóa sách","Không thể xóa sách đã có lịch sử mượn/trả. Hãy giữ sách trong kho để bảo toàn lịch sử.");
return;
}
showConfirmDialog({
title:"Xóa đầu sách khỏi kho",
message:`Bạn có chắc chắn muốn xóa cuốn sách “${book.title}” khỏi kho sách không? Thao tác này sẽ xóa sách trên thiết bị này.`,
book:book,
confirmText:"Xóa sách",
cancelText:"Hủy bỏ",
isDanger:true,
onConfirm:()=>{
const index=books.findIndex(item=>item.id===book.id);if(index!==-1)books.splice(index,1);
writeLocalList("bookin-admin-book-overrides",readLocalList("bookin-admin-book-overrides").filter(item=>Number(item.id)!==book.id));
const deletedIds=new Set(readLocalList("bookin-admin-deleted-books").map(Number));deletedIds.add(book.id);writeLocalList("bookin-admin-deleted-books",[...deletedIds]);
writeLocalList("bookin-saved-books",readLocalList("bookin-saved-books").filter(savedId=>Number(savedId)!==book.id));
const registeredUsers=readLocalList("bookin-registered-users");registeredUsers.forEach(user=>{user.savedBookIds=(user.savedBookIds||[]).filter(savedId=>Number(savedId)!==book.id);});writeLocalList("bookin-registered-users",registeredUsers);
users.forEach(user=>{user.savedBookIds=(user.savedBookIds||[]).filter(savedId=>Number(savedId)!==book.id);});
renderAdmin();
}
});
}
const categorySelect=document.getElementById("adminBookCategory");
[...new Set(books.map(book=>book.category))].sort().forEach(category=>categorySelect.insertAdjacentHTML("beforeend",`<option value="${escapeHTML(category)}">${escapeHTML(category)}</option>`));
function openBookDialog(book=null){
bookForm.reset();bookFormMessage.textContent="";
bookForm.elements.id.value=book?.id||"";
bookForm.elements.title.value=book?.title||"";
bookForm.elements.author.value=book?.author||"";
bookForm.elements.category.value=book?.category||"";
if(bookForm.elements.totalQuantity)bookForm.elements.totalQuantity.value=book?.totalQuantity??5;
if(bookForm.elements.availableQuantity)bookForm.elements.availableQuantity.value=book?.availableQuantity??(book?.status==="borrowed"?0:4);
bookForm.elements.year.value=book?.year||new Date().getFullYear();
bookForm.elements.pages.value=book?.pages||1;
bookForm.elements.rating.value=book?.rating||4.5;
bookForm.elements.publisher.value=book?.publisher||"";
bookForm.elements.status.value=book?.status||"available";
bookForm.elements.image.value=book?.image||"";
bookForm.elements.description.value=book?.description||"";
document.getElementById("adminBookDialogTitle").textContent=book?"Cập nhật đầu sách & tồn kho":"Thêm đầu sách mới";
bookDialog.showModal();
}
addBookButton.addEventListener("click",()=>openBookDialog());
bookDialog.querySelectorAll(".admin-dialog-close,.admin-dialog-cancel").forEach(button=>button.addEventListener("click",()=>bookDialog.close()));
bookDialog.addEventListener("click",event=>{if(event.target===bookDialog)bookDialog.close();});
bookForm.addEventListener("submit",event=>{
event.preventDefault();if(!bookForm.reportValidity())return;
const id=Number(bookForm.elements.id.value),title=bookForm.elements.title.value.trim(),duplicate=books.some(book=>book.id!==id&&normalize(book.title)===normalize(title));
if(duplicate){bookFormMessage.textContent="Đã có đầu sách trùng tên trong kho.";return;}
const totalQuantity=Math.max(1,Number(bookForm.elements.totalQuantity?.value||5));
const availableQuantity=Math.max(0,Math.min(totalQuantity,Number(bookForm.elements.availableQuantity?.value||0)));
const status=availableQuantity>0?"available":"borrowed";
const existing=books.find(book=>book.id===id),book={id:id||Math.max(...books.map(item=>item.id))+1,title,author:bookForm.elements.author.value.trim(),category:bookForm.elements.category.value,totalQuantity,availableQuantity,year:Number(bookForm.elements.year.value),pages:Number(bookForm.elements.pages.value),rating:Number(bookForm.elements.rating.value),publisher:bookForm.elements.publisher.value.trim(),status,description:bookForm.elements.description.value.trim(),image:bookForm.elements.image.value.trim()||existing?.image||books[0].image,cover:existing?.cover||"cover-one"};
const index=books.findIndex(item=>item.id===book.id);if(index===-1)books.push(book);else books[index]=book;
const overrides=readLocalList("bookin-admin-book-overrides"),overrideIndex=overrides.findIndex(item=>Number(item.id)===book.id);if(overrideIndex===-1)overrides.push(book);else overrides[overrideIndex]=book;
writeLocalList("bookin-admin-book-overrides",overrides);
bookDialog.close();renderAdmin();
});
bookDialog.querySelector(".admin-book-form")?.addEventListener("input",()=>{bookFormMessage.textContent="";});

// Lập phiếu mượn tại quầy
const createLoanBtn=document.getElementById("adminCreateLoan");
const loanDialog=document.getElementById("adminLoanDialog");
const loanForm=document.getElementById("adminLoanForm");
const loanReaderSelect=document.getElementById("adminLoanReader");
const loanBookSelect=document.getElementById("adminLoanBook");
const loanMessage=document.getElementById("adminLoanFormMessage");

createLoanBtn?.addEventListener("click",()=>{
loanForm.reset();if(loanMessage)loanMessage.textContent="";
if(loanReaderSelect)loanReaderSelect.innerHTML='<option value="">-- Chọn độc giả mượn --</option>'+allReaders().map(r=>`<option value="${r.id}">${escapeHTML(r.name)} (${escapeHTML(r.email)})</option>`).join("");
if(loanBookSelect)loanBookSelect.innerHTML='<option value="">-- Chọn sách còn trên kệ --</option>'+books.filter(b=>(b.availableQuantity??(b.status==="available"?4:0))>0).map(b=>`<option value="${b.id}">${escapeHTML(b.title)} (Còn ${(b.availableQuantity??(b.status==="available"?4:0))}/${(b.totalQuantity??5)} cuốn)</option>`).join("");
loanDialog?.showModal();
});
loanDialog?.querySelectorAll(".admin-dialog-close,.admin-dialog-cancel").forEach(button=>button.addEventListener("click",()=>loanDialog.close()));
loanDialog?.addEventListener("click",event=>{if(event.target===loanDialog)loanDialog.close();});
loanForm?.addEventListener("submit",event=>{
event.preventDefault();if(!loanForm.reportValidity())return;
const readerId=loanReaderSelect.value,bookId=Number(loanBookSelect.value),days=Number(loanForm.elements.days.value||14);
if(!readerId||!bookId){if(loanMessage)loanMessage.textContent="Vui lòng chọn đầy đủ độc giả và cuốn sách.";return;}
const book=books.find(b=>b.id===bookId);
if(!book||(book.availableQuantity??0)<=0){if(loanMessage)loanMessage.textContent="Cuốn sách này hiện đã tạm hết bản in trên kệ.";return;}
const now=new Date(),due=new Date(now);due.setDate(due.getDate()+days);
const entryId=`otc-loan-${readerId}-${Date.now()}`;
const requests=readLocalList("bookin-borrow-requests");
requests.push({id:book.id,userId:readerId,entryId,type:"active",date:now.toISOString(),dueDate:due.toISOString(),source:"otc"});
writeLocalList("bookin-borrow-requests",requests);
book.availableQuantity=Math.max(0,(book.availableQuantity??5)-1);
book.status=book.availableQuantity>0?"available":"borrowed";
const overrides=readLocalList("bookin-admin-book-overrides"),overrideIndex=overrides.findIndex(item=>Number(item.id)===book.id);
if(overrideIndex===-1)overrides.push(book);else overrides[overrideIndex]=book;
writeLocalList("bookin-admin-book-overrides",overrides);
loanDialog.close();renderAdmin();
});

tableWrap.addEventListener("click",event=>{const bookButton=event.target.closest("[data-book-action]");if(bookButton){if(bookButton.dataset.bookAction==="edit")openBookDialog(books.find(book=>book.id===Number(bookButton.dataset.bookId)));else if(bookButton.dataset.bookAction==="delete")deleteBook(bookButton.dataset.bookId);return;}const loanButton=event.target.closest("[data-loan-action]");if(loanButton)updateRequest(loanButton.dataset.entryId,loanButton.dataset.loanAction);});
document.querySelectorAll("[data-admin-tab]").forEach(button=>button.addEventListener("click",()=>{activeTab=button.dataset.adminTab;document.querySelectorAll("[data-admin-tab]").forEach(tab=>{const selected=tab===button;tab.classList.toggle("is-active",selected);tab.setAttribute("aria-selected",String(selected));});searchInput.value="";updateStatusOptions();renderAdmin();}));
searchInput.addEventListener("input",renderAdmin);statusFilter.addEventListener("change",renderAdmin);document.getElementById("adminRefresh")?.addEventListener("click",renderAdmin);
updateStatusOptions();renderAdmin();
}
document.addEventListener("DOMContentLoaded",()=>{
const headerActions=document.querySelector(".header-actions");
headerActions?.insertAdjacentHTML("afterbegin",'<a class="profile-header-link" href="profile.html" aria-label="Trang cá nhân" title="Trang cá nhân"><i class="fa-regular fa-user"></i></a>');
initProfilePage();
initBorrowedPage();
initBorrowHistoryPage();
initAdminPage();
if(document.querySelector(".app-container")) initSingleApp();
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

// Single-App Management Implementation
let currentAppTab = "overview";

function switchAppTab(tabName){
  currentAppTab = tabName;
  document.querySelectorAll(".sidebar-nav-item").forEach(item => {
    item.classList.toggle("is-active", item.dataset.appTab === tabName);
  });
  document.querySelectorAll(".app-section").forEach(sec => {
    sec.classList.toggle("is-active", sec.id === `section-${tabName}`);
  });

  const titles = {
    overview: ["Xin chào, Chủ thư viện 👋", "Tổng quan hoạt động thư viện hôm nay"],
    books: ["Quản lý kho sách & tồn kho", "Nhập sách mới, điều chỉnh số lượng bản sách"],
    borrowers: ["Quản lý danh sách người mượn", "Thành viên độc giả đã được cấp thẻ"],
    transactions: ["Giao dịch mượn & trả tại quầy", "Tạo phiếu mượn mới và ghi nhận trả sách"],
    history: ["Lịch sử nhật ký hệ thống", "Toàn bộ mốc giao dịch & cập nhật tồn kho"],
    statistics: ["Thống kê & Báo cáo quá hạn", "Phân tích thể loại và nhắc nợ quá hạn"]
  };
  const [t, s] = titles[tabName] || titles.overview;
  const headT = document.getElementById("appHeaderTitle"); if(headT) headT.textContent = t;
  const headS = document.getElementById("appHeaderSubtitle"); if(headS) headS.textContent = s;

  if(tabName === "overview") renderAppOverview();
  else if(tabName === "books") renderAppBooks();
  else if(tabName === "borrowers") renderAppBorrowers();
  else if(tabName === "transactions") renderAppTransactions();
  else if(tabName === "history") renderAppHistory();
  else if(tabName === "statistics") renderAppStatistics();
}

function renderAppOverview(){
  const requests = getAdminLoanRows();
  const totalCopies = books.reduce((sum, b) => sum + Number(b.totalQuantity || 5), 0);
  const availCopies = books.reduce((sum, b) => sum + Number(b.availableQuantity ?? (b.status === "available" ? 4 : 0)), 0);
  const activeLoans = requests.filter(r => r.type === "active").length;
  const overdueLoans = requests.filter(r => r.type === "active" && r.dueDate && new Date(r.dueDate) < new Date()).length;

  document.getElementById("dashTotalCopies").textContent = totalCopies;
  document.getElementById("dashAvailableCopies").textContent = availCopies;
  document.getElementById("dashBorrowedCount").textContent = activeLoans;
  document.getElementById("dashOverdueCount").textContent = overdueLoans;

  // Bảng Sách sắp hết
  const lowStock = books.filter(b => (b.availableQuantity ?? 4) <= 2);
  const lowWrap = document.getElementById("dashLowStockTableWrap");
  if(lowWrap){
    if(lowStock.length === 0){
      lowWrap.innerHTML = '<p class="admin-empty">Kho sách đang rất dồi dào, không có sách sắp hết.</p>';
    } else {
      lowWrap.innerHTML = `<table><thead><tr><th>Sách</th><th>Tổng cuốn</th><th>Có sẵn</th><th>Thao tác</th></tr></thead><tbody>${
        lowStock.map(b => `<tr>
          <td><div class="admin-book-cell"><img src="${b.image}"><div><strong>${escapeHTML(b.title)}</strong><small>${escapeHTML(b.author)}</small></div></div></td>
          <td><strong>${b.totalQuantity || 5}</strong></td>
          <td><span class="badge-overdue">Còn ${b.availableQuantity ?? 0}</span></td>
          <td><button class="admin-action" type="button" onclick="openAppBookDialogForEdit(${b.id})"><i class="fa-solid fa-plus"></i> Nhập thêm</button></td>
        </tr>`).join("")
      }</tbody></table>`;
    }
  }

  // Bảng Mượn gần đây
  const recentLoans = requests.slice().sort((a,b) => new Date(b.date || 0) - new Date(a.date || 0)).slice(0, 5);
  const recWrap = document.getElementById("dashRecentLoansWrap");
  const readerMap = new Map(allReaders().map(r => [r.id, r]));
  if(recWrap){
    if(recentLoans.length === 0){
      recWrap.innerHTML = '<p class="admin-empty">Chưa có giao dịch mượn gần đây.</p>';
    } else {
      recWrap.innerHTML = `<table><thead><tr><th>Người mượn</th><th>Sách</th><th>Ngày mượn</th><th>Trạng thái</th></tr></thead><tbody>${
        recentLoans.map(r => {
          const bk = books.find(b => b.id === Number(r.id));
          const rd = readerMap.get(r.userId);
          const isOverdue = r.type === "active" && r.dueDate && new Date(r.dueDate) < new Date();
          const badge = isOverdue ? '<span class="badge-overdue"><i class="fa-solid fa-triangle-exclamation"></i> Quá hạn</span>' : r.type === "active" ? '<span class="badge-active"><i class="fa-solid fa-clock"></i> Đang mượn</span>' : '<span class="badge-returned"><i class="fa-solid fa-check"></i> Đã trả</span>';
          return `<tr>
            <td><strong>${escapeHTML(rd?.name || "Nguyễn Văn A")}</strong></td>
            <td><strong>${escapeHTML(bk?.title || "Sách thư viện")}</strong></td>
            <td>${r.date ? new Date(r.date).toLocaleDateString("vi-VN") : "—"}</td>
            <td>${badge}</td>
          </tr>`;
        }).join("")
      }</tbody></table>`;
    }
  }
}

function renderAppBooks(){
  const search = normalize(document.getElementById("appBookSearch")?.value || "");
  const cat = document.getElementById("appBookCategoryFilter")?.value || "all";
  const filtered = books.filter(b => (!search || normalize(`${b.title} ${b.author} ${b.category}`).includes(search)) && (cat === "all" || b.category === cat));
  const wrap = document.getElementById("appBookTableWrap");
  if(!wrap) return;
  wrap.innerHTML = `<table><thead><tr><th>Sách</th><th>Thể loại</th><th>Năm</th><th>Số lượng kho</th><th>Tình trạng</th><th>Thao tác</th></tr></thead><tbody>${
    filtered.map(b => {
      const avail = Number(b.availableQuantity ?? (b.status === "available" ? 4 : 0));
      const total = Number(b.totalQuantity ?? 5);
      const badgeClass = avail > 2 ? "high" : avail > 0 ? "low" : "empty";
      const badgeText = avail > 2 ? `Còn ${avail}/${total} cuốn` : avail > 0 ? `Sắp hết (${avail}/${total})` : `Hết hàng (0/${total})`;
      return `<tr>
        <td><div class="admin-book-cell"><img src="${b.image}"><div><strong>${escapeHTML(b.title)}</strong><small>${escapeHTML(b.author)}</small></div></div></td>
        <td>${escapeHTML(b.category)}</td>
        <td>${b.year}</td>
        <td><span class="admin-stock-badge ${badgeClass}"><i class="fa-solid ${avail>0?'fa-boxes-stacked':'fa-triangle-exclamation'}"></i> ${badgeText}</span></td>
        <td><span class="admin-status ${avail>0?'available':'borrowed'}">${avail>0?'Còn trên kệ':'Tạm hết'}</span></td>
        <td><div class="admin-book-actions"><button class="admin-action" type="button" onclick="openAppBookDialogForEdit(${b.id})"><i class="fa-solid fa-pen"></i> Sửa</button><button class="admin-action delete-book" type="button" onclick="deleteBook(${b.id})"><i class="fa-solid fa-trash-can"></i> Xóa</button></div></td>
      </tr>`;
    }).join("")
  }</tbody></table>`;
}

function renderAppBorrowers(){
  const search = normalize(document.getElementById("appBorrowerSearch")?.value || "");
  const readers = allReaders().filter(r => !search || normalize(`${r.name} ${r.email} ${r.id}`).includes(search));
  const loans = getAdminLoanRows();
  const wrap = document.getElementById("appBorrowerTableWrap");
  if(!wrap) return;
  wrap.innerHTML = `<table><thead><tr><th>Người mượn</th><th>Mã độc giả</th><th>Ngày tham gia</th><th>Đang mượn</th><th>Trạng thái</th></tr></thead><tbody>${
    readers.map(r => {
      const activeCount = loans.filter(l => l.userId === r.id && l.type === "active").length;
      return `<tr>
        <td><div class="admin-reader-cell"><span>${escapeHTML(r.name.trim().split(/\s+/).slice(-2).map(p => p[0]).join("").toUpperCase())}</span><div><strong>${escapeHTML(r.name)}</strong><small>${escapeHTML(r.email)}</small></div></div></td>
        <td><strong>${escapeHTML(r.id)}</strong></td>
        <td>${r.joinedAt ? new Date(r.joinedAt).toLocaleDateString("vi-VN") : "—"}</td>
        <td><strong>${activeCount} cuốn</strong></td>
        <td><span class="admin-user-status active">Hoạt động</span></td>
      </tr>`;
    }).join("")
  }</tbody></table>`;
}

function renderAppTransactions(){
  const search = normalize(document.getElementById("appLoanSearch")?.value || "");
  const filter = document.getElementById("appLoanStatusFilter")?.value || "all";
  const requests = getAdminLoanRows();
  const readers = allReaders();
  const readerMap = new Map(readers.map(r => [r.id, r]));

  const filtered = requests.filter(r => {
    const bk = books.find(b => b.id === Number(r.id));
    const rd = readerMap.get(r.userId);
    const isOverdue = r.type === "active" && r.dueDate && new Date(r.dueDate) < new Date();
    const matchesQuery = !search || normalize(`${bk?.title || ""} ${bk?.author || ""} ${rd?.name || ""} ${rd?.email || ""}`).includes(search);
    const matchesFilter = filter === "all" || (filter === "overdue" ? isOverdue : r.type === filter);
    return bk && matchesQuery && matchesFilter;
  }).slice().sort((a,b) => new Date(b.date || 0) - new Date(a.date || 0));

  const wrap = document.getElementById("appLoanTableWrap");
  if(!wrap) return;
  wrap.innerHTML = `<table><thead><tr><th>Người mượn</th><th>Sách mượn</th><th>Ngày mượn</th><th>Hạn trả</th><th>Trạng thái</th><th>Thao tác</th></tr></thead><tbody>${
    filtered.map(r => {
      const bk = books.find(b => b.id === Number(r.id));
      const rd = readerMap.get(r.userId);
      const isOverdue = r.type === "active" && r.dueDate && new Date(r.dueDate) < new Date();
      const badge = isOverdue ? '<span class="badge-overdue"><i class="fa-solid fa-triangle-exclamation"></i> Quá hạn</span>' : r.type === "active" ? '<span class="badge-active"><i class="fa-solid fa-clock"></i> Đang mượn</span>' : '<span class="badge-returned"><i class="fa-solid fa-check"></i> Đã trả</span>';
      const action = r.type === "active" ? `<button class="admin-action return" type="button" onclick="appReturnLoan('${escapeHTML(r.entryId || "")}')"><i class="fa-solid fa-arrow-rotate-left"></i> Ghi nhận trả</button> <button class="admin-action" type="button" onclick="appExtendLoan('${escapeHTML(r.entryId || "")}')"><i class="fa-solid fa-calendar-plus"></i> Gia hạn 7 ngày</button>` : '<span class="admin-no-action">—</span>';
      return `<tr>
        <td><strong>${escapeHTML(rd?.name || "Nguyễn Văn A")}</strong><small class="admin-cell-sub">${escapeHTML(rd?.email || "")}</small></td>
        <td><strong>${escapeHTML(bk?.title || "Sách")}</strong><small class="admin-cell-sub">${escapeHTML(bk?.author || "")}</small></td>
        <td>${r.date ? new Date(r.date).toLocaleDateString("vi-VN") : "—"}</td>
        <td>${r.dueDate ? new Date(r.dueDate).toLocaleDateString("vi-VN") : "—"}</td>
        <td>${badge}</td>
        <td>${action}</td>
      </tr>`;
    }).join("")
  }</tbody></table>`;
}

function renderAppHistory(){
  const events = readLocalList("bookin-borrow-events").slice().sort((a,b) => new Date(b.date) - new Date(a.date));
  const wrap = document.getElementById("appHistoryWrap");
  if(!wrap) return;
  if(events.length === 0){
    wrap.innerHTML = '<p class="admin-empty">Chưa có nhật ký hoạt động nào được ghi nhận.</p>';
  } else {
    wrap.innerHTML = `<table><thead><tr><th>Thời gian</th><th>Người thực hiện / Độc giả</th><th>Cuốn sách</th><th>Hành động</th></tr></thead><tbody>${
      events.map(ev => {
        const bk = books.find(b => b.id === Number(ev.bookId));
        return `<tr>
          <td>${new Date(ev.date).toLocaleString("vi-VN")}</td>
          <td><strong>${escapeHTML(ev.userId || "Thủ thư Admin")}</strong></td>
          <td><strong>${escapeHTML(bk?.title || `Sách #${ev.bookId}`)}</strong></td>
          <td><span class="badge-active">${escapeHTML(ev.action)}</span></td>
        </tr>`;
      }).join("")
    }</tbody></table>`;
  }
}

function renderAppStatistics(){
  const catWrap = document.getElementById("appStatCategoryWrap");
  if(catWrap){
    const counts = {};
    books.forEach(b => { counts[b.category] = (counts[b.category] || 0) + (b.totalQuantity || 5); });
    const total = Object.values(counts).reduce((a,b)=>a+b, 0);
    catWrap.innerHTML = Object.entries(counts).map(([cat, cnt]) => {
      const pct = Math.round((cnt / total) * 100);
      return `<div style="margin-bottom:14px;"><div style="display:flex;justify-space-between;font-size:12px;font-weight:700;margin-bottom:4px;"><span>${cat}</span><span>${cnt} cuốn (${pct}%)</span></div><div style="height:8px;background:#eee9e0;border-radius:4px;overflow:hidden;"><div style="width:${pct}%;height:100%;background:var(--orange);border-radius:4px;"></div></div></div>`;
    }).join("");
  }

  const overdueWrap = document.getElementById("appStatOverdueWrap");
  if(overdueWrap){
    const requests = getAdminLoanRows().filter(r => r.type === "active" && r.dueDate && new Date(r.dueDate) < new Date());
    const readerMap = new Map(allReaders().map(r => [r.id, r]));
    if(requests.length === 0){
      overdueWrap.innerHTML = '<p class="admin-empty">Không có khoản mượn nào bị quá hạn. Thư viện đang hoạt động rất tốt!</p>';
    } else {
      overdueWrap.innerHTML = `<table><thead><tr><th>Người mượn</th><th>Email liên hệ</th><th>Sách quá hạn</th><th>Hạn trả</th></tr></thead><tbody>${
        requests.map(r => {
          const bk = books.find(b => b.id === Number(r.id));
          const rd = readerMap.get(r.userId);
          return `<tr>
            <td><strong>${escapeHTML(rd?.name || "Nguyễn Văn A")}</strong></td>
            <td><a href="mailto:${escapeHTML(rd?.email || "")}" style="color:var(--orange);font-weight:bold;">${escapeHTML(rd?.email || "")}</a></td>
            <td><strong>${escapeHTML(bk?.title || "")}</strong></td>
            <td><span class="badge-overdue">${new Date(r.dueDate).toLocaleDateString("vi-VN")}</span></td>
          </tr>`;
        }).join("")
      }</tbody></table>`;
    }
  }
}

function appReturnLoan(entryId){
  updateRequest(entryId, "return");
  switchAppTab(currentAppTab);
}

function appExtendLoan(entryId){
  const requests = readLocalList("bookin-borrow-requests");
  const item = requests.find(r => r.entryId === entryId);
  if(item && item.dueDate){
    const due = new Date(item.dueDate);
    due.setDate(due.getDate() + 7);
    item.dueDate = due.toISOString();
    writeLocalList("bookin-borrow-requests", requests);
    switchAppTab(currentAppTab);
  }
}

function openAppBookDialogForEdit(bookId){
  const book = books.find(b => b.id === Number(bookId));
  const dialog = document.getElementById("appBookDialog");
  const form = document.getElementById("appBookForm");
  const catSelect = document.getElementById("appBookCategory");
  if(!dialog || !form) return;
  catSelect.innerHTML = [...new Set(books.map(b => b.category))].sort().map(c => `<option value="${c}">${c}</option>`).join("");
  form.reset();
  form.elements.id.value = book?.id || "";
  form.elements.title.value = book?.title || "";
  form.elements.author.value = book?.author || "";
  form.elements.category.value = book?.category || books[0].category;
  form.elements.totalQuantity.value = book?.totalQuantity ?? 5;
  form.elements.availableQuantity.value = book?.availableQuantity ?? 4;
  form.elements.year.value = book?.year || 2024;
  form.elements.pages.value = book?.pages || 300;
  form.elements.image.value = book?.image || "";
  document.getElementById("appBookDialogTitle").textContent = book ? "Cập nhật thông tin kho sách" : "Nhập đầu sách mới";
  dialog.showModal();
}

function initSingleApp(){
  // Auto set Admin Session for seamless Demo
  const adminUser = {id:"USR-000",name:"Quản trị viên",email:"admin@bookin.vn",role:"admin",status:"active"};
  localStorage.setItem("bookin-profile", JSON.stringify({name:adminUser.name, email:adminUser.email}));
  localStorage.setItem("bookin-current-user", adminUser.id);

  // Tab listeners
  document.querySelectorAll(".sidebar-nav-item").forEach(item => {
    item.addEventListener("click", () => switchAppTab(item.dataset.appTab));
  });

  // Mobile sidebar toggle
  document.getElementById("mobileSidebarToggle")?.addEventListener("click", () => {
    document.getElementById("appSidebar")?.classList.toggle("is-open");
  });

  // Header quick loan button
  document.getElementById("appQuickLoanBtn")?.addEventListener("click", () => {
    document.getElementById("appNewLoanBtn")?.click();
  });

  // Books tab action listeners
  document.getElementById("appAddBookBtn")?.addEventListener("click", () => openAppBookDialogForEdit(null));
  document.getElementById("appBookSearch")?.addEventListener("input", renderAppBooks);
  document.getElementById("appBookCategoryFilter")?.addEventListener("change", renderAppBooks);

  // Book dialog submit
  const bookDialog = document.getElementById("appBookDialog");
  const bookForm = document.getElementById("appBookForm");
  bookDialog?.querySelectorAll(".admin-dialog-close, .admin-dialog-cancel").forEach(b => b.addEventListener("click", () => bookDialog.close()));
  bookForm?.addEventListener("submit", event => {
    event.preventDefault();
    const id = Number(bookForm.elements.id.value);
    const title = bookForm.elements.title.value.trim();
    const totalQuantity = Math.max(1, Number(bookForm.elements.totalQuantity.value || 5));
    const availableQuantity = Math.max(0, Math.min(totalQuantity, Number(bookForm.elements.availableQuantity.value || 0)));
    const status = availableQuantity > 0 ? "available" : "borrowed";
    const existing = books.find(b => b.id === id);
    const book = {
      id: id || Math.max(...books.map(b => b.id)) + 1,
      title,
      author: bookForm.elements.author.value.trim(),
      category: bookForm.elements.category.value,
      totalQuantity,
      availableQuantity,
      year: Number(bookForm.elements.year.value),
      pages: Number(bookForm.elements.pages.value),
      rating: existing?.rating || 4.8,
      publisher: existing?.publisher || "Bookin Publishing",
      status,
      image: bookForm.elements.image.value.trim() || existing?.image || books[0].image,
      cover: existing?.cover || "cover-one",
      description: existing?.description || "Sách thư viện"
    };
    const idx = books.findIndex(b => b.id === book.id);
    if(idx === -1) books.push(book); else books[idx] = book;
    const overrides = readLocalList("bookin-admin-book-overrides");
    const ovIdx = overrides.findIndex(o => Number(o.id) === book.id);
    if(ovIdx === -1) overrides.push(book); else overrides[ovIdx] = book;
    writeLocalList("bookin-admin-book-overrides", overrides);
    bookDialog.close();
    switchAppTab(currentAppTab);
  });

  // OTC Loan Dialog
  const loanDialog = document.getElementById("appLoanDialog");
  const loanForm = document.getElementById("appLoanForm");
  const readerSelect = document.getElementById("appLoanReaderSelect");
  const bookSelect = document.getElementById("appLoanBookSelect");
  const loanMessage = document.getElementById("appLoanMessage");
  const borrowDateInput = document.getElementById("appLoanBorrowDate");
  const dueDateInput = document.getElementById("appLoanDueDate");

  document.getElementById("appNewLoanBtn")?.addEventListener("click", () => {
    loanForm.reset();
    if(loanMessage) loanMessage.textContent = "";
    const now = new Date();
    const due = new Date(now);
    due.setDate(due.getDate() + 7);
    if(borrowDateInput) borrowDateInput.value = now.toISOString().slice(0, 10);
    if(dueDateInput) dueDateInput.value = due.toISOString().slice(0, 10);

    if(readerSelect) readerSelect.innerHTML = '<option value="">-- Chọn người mượn --</option>' + allReaders().map(r => `<option value="${r.id}">${escapeHTML(r.name)} (${escapeHTML(r.email)})</option>`).join("");
    if(bookSelect) bookSelect.innerHTML = '<option value="">-- Chọn sách --</option>' + books.filter(b => (b.availableQuantity ?? 4) > 0).map(b => `<option value="${b.id}">${escapeHTML(b.title)} (Còn ${(b.availableQuantity ?? 4)}/${b.totalQuantity || 5} cuốn)</option>`).join("");
    loanDialog?.showModal();
  });
  loanDialog?.querySelectorAll(".admin-dialog-close, .admin-dialog-cancel").forEach(b => b.addEventListener("click", () => loanDialog.close()));
  loanForm?.addEventListener("submit", event => {
    event.preventDefault();
    const readerId = readerSelect.value;
    const bookId = Number(bookSelect.value);
    const qty = Math.max(1, Number(loanForm.elements.quantity?.value || 1));
    const bDateVal = borrowDateInput?.value ? new Date(borrowDateInput.value).toISOString() : new Date().toISOString();
    const dDateVal = dueDateInput?.value ? new Date(dueDateInput.value).toISOString() : new Date(Date.now() + 7*86400000).toISOString();

    if(!readerId || !bookId){ if(loanMessage) loanMessage.textContent = "Vui lòng chọn đầy đủ người mượn và cuốn sách."; return; }
    const book = books.find(b => b.id === bookId);
    if(!book || (book.availableQuantity ?? 0) < qty){ if(loanMessage) loanMessage.textContent = `Số lượng sách rảnh trên kệ không đủ (chỉ còn ${book?.availableQuantity || 0} cuốn).`; return; }

    const prevAvail = book.availableQuantity ?? 5;
    const totalStock = book.totalQuantity ?? 5;
    const entryId = `otc-loan-${readerId}-${Date.now()}`;
    const requests = readLocalList("bookin-borrow-requests");
    requests.push({ id: book.id, userId: readerId, entryId, type: "active", date: bDateVal, dueDate: dDateVal, source: "otc" });
    writeLocalList("bookin-borrow-requests", requests);

    book.availableQuantity = Math.max(0, prevAvail - qty);
    book.status = book.availableQuantity > 0 ? "available" : "borrowed";
    const overrides = readLocalList("bookin-admin-book-overrides");
    const ovIdx = overrides.findIndex(o => Number(o.id) === book.id);
    if(ovIdx === -1) overrides.push(book); else overrides[ovIdx] = book;
    writeLocalList("bookin-admin-book-overrides", overrides);

    loanDialog.close();
    switchAppTab(currentAppTab);

    // Show summary notification matching screenshot logic
    showNoticeDialog(
      "Xác nhận mượn thành công",
      `Đã tạo phiếu mượn cho sách “${book.title}”:\n\n` +
      `• Trước khi mượn: ${totalStock} cuốn tổng, ${prevAvail} có sẵn\n` +
      `• Mượn: ${qty} cuốn\n` +
      `• Sau khi mượn: ${totalStock} cuốn tổng, ${book.availableQuantity} có sẵn, ${totalStock - book.availableQuantity} đang mượn.`
    );
  });

  // Borrower Dialog
  const borrowerDialog = document.getElementById("appBorrowerDialog");
  const borrowerForm = document.getElementById("appBorrowerForm");
  document.getElementById("appAddBorrowerBtn")?.addEventListener("click", () => {
    borrowerForm.reset();
    borrowerDialog?.showModal();
  });
  borrowerDialog?.querySelectorAll(".admin-dialog-close, .admin-dialog-cancel").forEach(b => b.addEventListener("click", () => borrowerDialog.close()));
  borrowerForm?.addEventListener("submit", event => {
    event.preventDefault();
    const name = document.getElementById("appBorrowerName").value.trim();
    const email = document.getElementById("appBorrowerEmail").value.trim();
    if(!name || !email) return;
    const registered = readLocalList("bookin-registered-users");
    const newReader = { id: `USR-${Date.now()}`, name, email, role: "reader", status: "active", joinedAt: new Date().toISOString().slice(0, 10) };
    writeLocalList("bookin-registered-users", [...registered, newReader]);
    borrowerDialog.close();
    renderAppBorrowers();
  });

  // Filters & Searches listeners
  document.getElementById("appBorrowerSearch")?.addEventListener("input", renderAppBorrowers);
  document.getElementById("appLoanSearch")?.addEventListener("input", renderAppTransactions);
  document.getElementById("appLoanStatusFilter")?.addEventListener("change", renderAppTransactions);

  // Logout button
  document.getElementById("appLogoutBtn")?.addEventListener("click", () => {
    localStorage.removeItem("bookin-current-user");
    localStorage.removeItem("bookin-profile");
    location.href = "login.html";
  });

  // Initial tab render
  switchAppTab("overview");
}

function card(b){
const status=b.status==="available"?'<span class="status available"><i class="fa-solid fa-circle-check"></i> Còn sách</span>':'<span class="status borrowed"><i class="fa-solid fa-clock"></i> Đang mượn</span>';
const requestStatus=borrowRequestPresentation(currentUserBookRequest(b.id)),requestBadge=requestStatus?`<span class="user-book-status ${requestStatus.className}"><i class="fa-solid ${requestStatus.icon}"></i> ${requestStatus.label}</span>`:"";
return `<article class="book-card"><a href="book-detail.html?id=${b.id}"><div class="book-cover ${b.cover}"><img src="${b.image}" alt="Bìa sách ${b.title}" loading="lazy" onerror="this.style.display='none'"><span>${String(b.id).padStart(2,"0")}</span><i class="fa-solid fa-book-open"></i></div></a><div class="book-info"><span class="book-category">${b.category.toUpperCase()}</span><h3>${b.title}</h3><p>${b.author}</p><div class="book-bottom"><div class="book-meta"><span class="book-rating"><i class="fa-solid fa-star"></i> ${b.rating}</span>${status}${requestBadge}</div><a href="book-detail.html?id=${b.id}" aria-label="Xem chi tiết"><button><i class="fa-solid fa-arrow-right"></i></button></a></div></div></article>`;
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
function updateBookBorrowStatus(){
const detail=document.getElementById("bookDetail");if(!detail)return;
const bookId=Number(new URLSearchParams(location.search).get("id")),request=currentUserBookRequest(bookId),presentation=borrowRequestPresentation(request);
if(!presentation)return;
const stockStatus=detail.querySelector(".detail-info .status"),action=detail.querySelector(".detail-actions .primary-btn");
if(stockStatus){const badge=document.createElement("span");badge.className=`user-request-status ${presentation.className}`;badge.innerHTML=`<i class="fa-solid ${presentation.icon}" aria-hidden="true"></i> ${presentation.label}`;stockStatus.insertAdjacentElement("afterend",badge);}
if(action&&["borrow","waitlist","active"].includes(request.type)){action.href="borrowed.html";action.removeAttribute("onclick");action.innerHTML=`${presentation.label} <i class="fa-solid fa-arrow-right"></i>`;}
}
document.addEventListener("DOMContentLoaded",updateBookBorrowStatus);
function borrowBook(id){
const book=books.find(item=>item.id===Number(id));if(!book)return;
const userId=localStorage.getItem("bookin-current-user");
document.querySelector(".borrow-dialog")?.remove();
const isAvailable=book.status==="available",type=isAvailable?"borrow":"waitlist";
const existing=userId?currentUserBorrowRequests().find(request=>Number(request.id)===book.id&&["borrow","waitlist","active"].includes(request.type)):null;
const dialog=document.createElement("dialog");dialog.className="borrow-dialog";dialog.setAttribute("aria-labelledby","borrowDialogTitle");
let content="";
if(!userId){content=`<p class="borrow-dialog-copy">Đăng nhập để kiểm tra và gửi yêu cầu mượn cuốn sách này.</p><div class="borrow-dialog-actions"><button class="borrow-dialog-cancel" type="button">Để sau</button><a class="borrow-dialog-confirm" href="login.html?returnTo=${encodeURIComponent(`book-detail.html?id=${book.id}`)}">Đăng nhập</a></div>`;}
else if(existing){const text=existing.type==="active"?"Bạn đang mượn cuốn sách này.":"Bạn đã có yêu cầu cho cuốn sách này.";content=`<p class="borrow-dialog-copy">${text}</p><div class="borrow-dialog-actions"><button class="borrow-dialog-cancel" type="button">Đóng</button><a class="borrow-dialog-confirm" href="borrowed.html">Xem yêu cầu</a></div>`;}
else{content=`<p class="borrow-dialog-copy">${isAvailable?"Xác nhận sẽ ghi nhận sách đang mượn trên tài khoản này, với hạn trả dự kiến sau 14 ngày. Trạng thái được lưu trên thiết bị.":"Sách hiện đang được mượn. Bạn có thể đăng ký chờ để nhận thông báo khi sách sẵn sàng."}</p><div class="borrow-check-row"><i class="fa-solid ${isAvailable?"fa-circle-check":"fa-clock"}"></i><span>${isAvailable?"Tình trạng: Còn sách":"Tình trạng: Đang được mượn"}</span></div><div class="borrow-dialog-actions"><button class="borrow-dialog-cancel" type="button">Hủy</button><button class="borrow-dialog-confirm borrow-confirm" type="button">${isAvailable?"Xác nhận mượn":"Đăng ký chờ"}</button></div>`;}
dialog.innerHTML=`<div class="borrow-dialog-panel"><button class="borrow-dialog-x" type="button" aria-label="Đóng"><i class="fa-solid fa-xmark"></i></button><span class="borrow-dialog-kicker">BOOKIN READING CLUB</span><h2 id="borrowDialogTitle">${isAvailable?"Kiểm tra trước khi mượn":"Đăng ký chờ sách"}</h2><div class="borrow-dialog-book"><img src="${book.image}" alt="Bìa sách ${book.title}"><div><strong>${book.title}</strong><span>${book.author}</span><small>${book.category}</small></div></div>${content}</div>`;
document.body.append(dialog);
const closeDialog=()=>dialog.close();
dialog.querySelectorAll(".borrow-dialog-cancel,.borrow-dialog-x").forEach(button=>button.addEventListener("click",closeDialog));
dialog.addEventListener("click",event=>{if(event.target===dialog)closeDialog();});
dialog.querySelector(".borrow-confirm")?.addEventListener("click",()=>{
const activeUserId=localStorage.getItem("bookin-current-user");
if(!activeUserId){closeDialog();location.href=`login.html?returnTo=${encodeURIComponent(`book-detail.html?id=${book.id}`)}`;return;}
const requests=readLocalList("bookin-borrow-requests"),alreadyRequested=requests.some(request=>request.userId===activeUserId&&Number(request.id)===book.id&&["borrow","waitlist","active"].includes(request.type));
if(alreadyRequested){closeDialog();location.href="borrowed.html";return;}
const borrowedAt=new Date(),dueDate=new Date(borrowedAt);dueDate.setDate(dueDate.getDate()+14);
const entryId=`loan-${activeUserId}-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,action=isAvailable?"borrowed":"waitlist_requested",date=borrowedAt.toISOString(),dueDateValue=isAvailable?dueDate.toISOString():null;
requests.push({id:book.id,userId:activeUserId,entryId,type:isAvailable?"active":"waitlist",date,...(dueDateValue?{dueDate:dueDateValue}: {})});
if(isAvailable)setBookInventoryStatus(book.id,"borrowed");
writeLocalList("bookin-borrow-requests",requests);
appendBorrowEvent({userId:activeUserId,entryId,bookId:book.id,action,date,dueDate:dueDateValue});
closeDialog();location.href="borrowed.html";
});
dialog.showModal();
}
