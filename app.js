// TravelLog Core Application Logic

const DEFAULT_OSAKA_TRIP = {
  id: "trip_osaka_2026",
  title: "오사카 맛집 & 힐링 여행",
  destination: "일본 오사카",
  flag: "🇯🇵",
  currency: "JPY",
  baseCurrency: "KRW",
  exchangeRate: 9.085,
  rateLastUpdated: "실시간 연동",
  startDate: "2026-10-03",
  endDate: "2026-10-08",
  totalBudget: 1500000,
  participants: ["나 (작성자)", "민우", "수진"],
  itinerary: [
    { id: "it_1", dayIndex: 1, date: "2026-10-03", time: "11:30", title: "간사이 공항 도착 & 라피트 특급 열차 탑승", category: "transport", costLocal: 1490, locationQuery: "Kansai International Airport Osaka", memo: "난바역 직행 티켓 교환 및 이코카 충전", isCompleted: true },
    { id: "it_2", dayIndex: 1, date: "2026-10-03", time: "13:30", title: "이치란 라멘 도톤보리 본관 점심", category: "food", costLocal: 1480, locationQuery: "Ichiran Dotonbori Main Building Osaka", memo: "황금비율: 비밀소스 4배, 면 질김, 기름진 정도 담백", isCompleted: true },
    { id: "it_3", dayIndex: 1, date: "2026-10-03", time: "15:30", title: "크로스 호텔 오사카 체크인", category: "stay", costLocal: 0, locationQuery: "Cross Hotel Osaka Shinsaibashi", memo: "도톤보리 도보 1분 위치, 짐 풀고 휴식", isCompleted: true },
    { id: "it_4", dayIndex: 1, date: "2026-10-03", time: "19:00", title: "쿠시카츠 다루마 도톤보리점 & 글리코상 사진", category: "food", costLocal: 3200, locationQuery: "Kushikatsu Daruma Dotonbori", memo: "원조 꼬치튀김 세트 + 나마비루(생맥주) 필수!", isCompleted: true },
    { id: "it_5", dayIndex: 2, date: "2026-10-04", time: "11:00", title: "규카츠 모토무라 난바점 오픈런", category: "food", costLocal: 2600, locationQuery: "Gyukatsu Motomura Namba Osaka", memo: "130g 더블 규카츠 정식, 개인 화로 굽기", isCompleted: false },
    { id: "it_6", dayIndex: 2, date: "2026-10-04", time: "14:00", title: "오사카성 천수각 & 고자부네 뱃놀이", category: "spot", costLocal: 600, locationQuery: "Osaka Castle Osaka", memo: "주유패스 무료 입장 혜택 활용", isCompleted: false },
    { id: "it_7", dayIndex: 2, date: "2026-10-04", time: "18:30", title: "우메다 스카이빌딩 공중정원 전망대 일몰", category: "spot", costLocal: 1500, locationQuery: "Umeda Sky Building Osaka", memo: "오후 6시 전 입장 시 주유패스 무료", isCompleted: false },
    { id: "it_8", dayIndex: 3, date: "2026-10-05", time: "08:30", title: "유니버설 스튜디오 재팬 (USJ) 종일 투어", category: "spot", costLocal: 8900, locationQuery: "Universal Studios Japan Osaka", memo: "슈퍼 닌텐도 월드 & 해리포터 확약권 시간 체크", isCompleted: false },
    { id: "it_9", dayIndex: 4, date: "2026-10-06", time: "13:00", title: "하루카스 300 전망대 & 텐노지 공원", category: "spot", costLocal: 1800, locationQuery: "Abeno Harukas 300 Observatory", memo: "일본 최고층 빌딩에서 오사카 전경 감상", isCompleted: false }
  ],
  expenses: [
    { id: "exp_1", date: "2026-10-03", title: "라피트 특급열차 왕복 티켓 (3인)", category: "transport", amountLocal: 4470, amountBase: 40610, paymentMethod: "card", placeName: "간사이 공항", payer: "나 (작성자)", memo: "클룩 바우처 현지 교환" },
    { id: "exp_2", date: "2026-10-03", title: "이치란 라멘 3인 점심", category: "food", amountLocal: 4440, amountBase: 40337, paymentMethod: "cash", placeName: "이치란 라멘 도톤보리점", payer: "민우", memo: "라멘 3그릇 + 반숙계란 추가" },
    { id: "exp_3", date: "2026-10-03", title: "편의점 간식 & 생수 (로손)", category: "food", amountLocal: 1560, amountBase: 14172, paymentMethod: "transit_card", placeName: "로손 편의점 신사이바시", payer: "수진", memo: "모찌롤 & 아사히 맥주" },
    { id: "exp_4", date: "2026-10-03", title: "쿠시카츠 다루마 저녁 (꼬치+맥주)", category: "food", amountLocal: 9800, amountBase: 89033, paymentMethod: "card", placeName: "쿠시카츠 다루마", payer: "나 (작성자)", memo: "소스 두 번 찍기 금지!" },
    { id: "exp_5", date: "2026-10-03", title: "돈키호테 쇼핑 (의약품 & 젤리)", category: "shopping", amountLocal: 18500, amountBase: 168072, paymentMethod: "card", placeName: "돈키호테 도톤보리점", payer: "나 (작성자)", memo: "면세 10% + 5% 할인쿠폰 적용" },
    { id: "exp_6", date: "2026-10-04", title: "오사카 주유패스 2일권 (3인)", category: "spot", amountLocal: 10950, amountBase: 99480, paymentMethod: "card", placeName: "난바 관광안내소", payer: "민우", memo: "지하철 무료 & 주요 관광지 무료" }
  ],
  places: [
    { id: "pl_1", name: "이치란 라멘 도톤보리 본관", category: "food", rating: "4.6", mustTry: "천연 돈코츠 라멘 + 비밀소스 4배", lat: 34.6687, lng: 135.5019, googleQuery: "Ichiran Dotonbori Main Building Osaka", address: "1 Chome-7-21 Dotonbori, Chuo Ward, Osaka" },
    { id: "pl_2", name: "규카츠 모토무라 난바점", category: "food", rating: "4.8", mustTry: "소고기 살치살 규카츠 정식", lat: 34.6653, lng: 135.5011, googleQuery: "Gyukatsu Motomura Namba Osaka", address: "3 Chome-3-1 Nanba, Chuo Ward, Osaka" },
    { id: "pl_3", name: "쿠시카츠 다루마 도톤보리점", category: "food", rating: "4.4", mustTry: "원조 쿠시카츠 모둠 세트", lat: 34.6689, lng: 135.5030, googleQuery: "Kushikatsu Daruma Dotonbori", address: "1 Chome-6-4 Dotonbori, Chuo Ward, Osaka" },
    { id: "pl_4", name: "하루카스 300 전망대", category: "spot", rating: "4.7", mustTry: "300m 상공 통유리 스카이라운지", lat: 34.6459, lng: 135.5140, googleQuery: "Abeno Harukas 300 Observatory Osaka", address: "1 Chome-1-43 Abenosuji, Abeno Ward, Osaka" },
    { id: "pl_5", name: "유니버설 스튜디오 재팬 (USJ)", category: "spot", rating: "4.9", mustTry: "슈퍼 닌텐도 월드 마리오 카트", lat: 34.6654, lng: 135.4323, googleQuery: "Universal Studios Japan Osaka", address: "2 Chome-1-33 Sakurajima, Konohana Ward, Osaka" },
    { id: "pl_6", name: "우메다 스카이빌딩 공중정원", category: "spot", rating: "4.5", mustTry: "360도 루프탑 야경 산책로", lat: 34.7052, lng: 135.4900, googleQuery: "Umeda Sky Building Osaka", address: "1 Chome-1-88 Oyodonaka, Kita Ward, Osaka" },
    { id: "pl_7", name: "오사카성 천수각", category: "spot", rating: "4.4", mustTry: "오사카성 공원 산책 & 성벽 뷰", lat: 34.6873, lng: 135.5262, googleQuery: "Osaka Castle Osaka", address: "1-1 Osakajo, Chuo Ward, Osaka" },
    { id: "pl_8", name: "돈키호테 도톤보리점", category: "shopping", rating: "4.2", mustTry: "관람차 에비스 타워 & 면세 쇼핑", lat: 34.6690, lng: 135.5034, googleQuery: "Don Quijote Dotonbori Osaka", address: "7-13 Soemoncho, Chuo Ward, Osaka" }
  ]
};

let currentTrip = null;
let currentSelectedDay = "all";
let currentExpenseCategory = "all";
let leafletMap = null;
let mapMarkers = [];
let categoryChartInstance = null;
let dailyChartInstance = null;

window.addEventListener("DOMContentLoaded", () => {
  initApp();
  startLiveClock();
});

function initApp() {
  try { loadTripData(); } catch(e) { console.error(e); }
  try { renderHeader(); } catch(e) { console.error(e); }
  try { renderDayFilterChips(); } catch(e) { console.error(e); }
  try { renderItineraryList(); } catch(e) { console.error(e); }
  try { renderExpenseList(); } catch(e) { console.error(e); }
  try { populateFormDropdowns(); } catch(e) { console.error(e); }
  try { initAnalytics(); } catch(e) { console.error(e); }
  try { initMap(); } catch(e) { console.error(e); }
}

function loadTripData() {
  const saved = localStorage.getItem("travel_planner_active_trip");
  if (saved) {
    try {
      currentTrip = JSON.parse(saved);
    } catch (e) {
      currentTrip = JSON.parse(JSON.stringify(DEFAULT_OSAKA_TRIP));
    }
  } else {
    currentTrip = JSON.parse(JSON.stringify(DEFAULT_OSAKA_TRIP));
    saveTripToStorage();
  }
}

function saveTripToStorage() {
  localStorage.setItem("travel_planner_active_trip", JSON.stringify(currentTrip));
}

function resetToOsakaSample() {
  if (confirm("오사카 5박 6일 예제 데이터로 초기화하시겠습니까?")) {
    currentTrip = JSON.parse(JSON.stringify(DEFAULT_OSAKA_TRIP));
    saveTripToStorage();
    initApp();
    switchTab('itinerary');
  }
}

function startLiveClock() {
  const update = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const clockEl = document.getElementById("liveClock");
    if (clockEl) clockEl.textContent = `${hours}:${minutes}`;
  };
  update();
  setInterval(update, 10000);
}

function renderHeader() {
  if (!currentTrip) return;
  const titleEl = document.getElementById("tripTitle");
  if (titleEl) titleEl.textContent = currentTrip.title;
  const destEl = document.getElementById("tripDestination");
  if (destEl) destEl.textContent = currentTrip.destination;
  const flagEl = document.getElementById("tripFlag");
  if (flagEl) flagEl.textContent = currentTrip.flag || "✈️";
  const start = currentTrip.startDate.substring(5).replace('-', '.');
  const end = currentTrip.endDate.substring(5).replace('-', '.');
  const dayCount = calculateDaysBetween(currentTrip.startDate, currentTrip.endDate);
  const durEl = document.getElementById("tripDuration");
  if (durEl) durEl.textContent = `${start} ~ ${end} (${dayCount-1}박${dayCount}일)`;
  const islandEl = document.getElementById("islandStatus");
  if (islandEl) islandEl.textContent = `${currentTrip.destination.split(' ').pop()} D-Day`;
  const rate100 = (currentTrip.exchangeRate * 100).toFixed(1);
  const rateEl = document.getElementById("rateDisplay");
  if (rateEl) rateEl.textContent = `100 ${currentTrip.currency} = ${Number(rate100).toLocaleString()}원`;
  const totalSpentKRW = currentTrip.expenses.reduce((sum, exp) => sum + exp.amountBase, 0);
  const remainingKRW = currentTrip.totalBudget - totalSpentKRW;
  const spentPercent = Math.min(100, Math.round((totalSpentKRW / currentTrip.totalBudget) * 100)) || 0;
  const remEl = document.getElementById("remainingBudgetDisplay");
  if (remEl) remEl.textContent = `${Number(remainingKRW).toLocaleString()}원`;
  const badgeEl = document.getElementById("spentPercentBadge");
  if (badgeEl) badgeEl.textContent = `${spentPercent}% 사용`;
  const totalSpentLocal = currentTrip.expenses.reduce((sum, exp) => sum + exp.amountLocal, 0);
  const spentKrwEl = document.getElementById("totalSpentKRW");
  if (spentKrwEl) spentKrwEl.textContent = `${Number(totalSpentKRW).toLocaleString()}원`;
  const spentLocalEl = document.getElementById("totalSpentLocal");
  if (spentLocalEl) spentLocalEl.textContent = `${Number(totalSpentLocal).toLocaleString()} ${currentTrip.currency}`;
  const budgetDispEl = document.getElementById("totalBudgetDisplay");
  if (budgetDispEl) budgetDispEl.textContent = `${Number(currentTrip.totalBudget).toLocaleString()}원`;
  const cardRemEl = document.getElementById("cardRemainingBudget");
  if (cardRemEl) cardRemEl.textContent = `${Number(remainingKRW).toLocaleString()}원`;
}

function calculateDaysBetween(startStr, endStr) {
  const s = new Date(startStr);
  const e = new Date(endStr);
  const diffTime = Math.abs(e - s);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
}

function getDayLabel(dayIndex) {
  if (!currentTrip) return `Day ${dayIndex}`;
  const start = new Date(currentTrip.startDate);
  start.setDate(start.getDate() + (dayIndex - 1));
  const month = start.getMonth() + 1;
  const day = start.getDate();
  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];
  return `Day ${dayIndex} (${month}.${day} ${weekDays[start.getDay()]})`;
}

function renderDayFilterChips() {
  const container = document.getElementById("dayChipsContainer");
  if (!container || !currentTrip) return;
  const totalDays = calculateDaysBetween(currentTrip.startDate, currentTrip.endDate);
  let html = `<button class="px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition ${currentSelectedDay === 'all' ? 'bg-blue-600 text-white shadow-sm' : 'bg-white text-gray-700 border border-gray-200'}" onclick="selectDayFilter('all')">전체보기</button>`;
  for (let i = 1; i <= totalDays; i++) {
    const isSelected = currentSelectedDay == i;
    html += `<button class="px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition ${isSelected ? 'bg-blue-600 text-white shadow-sm' : 'bg-white text-gray-700 border border-gray-200'}" onclick="selectDayFilter(${i})">${getDayLabel(i)}</button>`;
  }
  container.innerHTML = html;
}

function selectDayFilter(day) {
  currentSelectedDay = day;
  renderDayFilterChips();
  renderItineraryList();
}

function renderItineraryList() {
  const container = document.getElementById("itineraryList");
  if (!container || !currentTrip) return;
  let filtered = currentTrip.itinerary;
  const dayLabelEl = document.getElementById("currentDayLabel");
  if (currentSelectedDay !== 'all') {
    filtered = filtered.filter(item => item.dayIndex == currentSelectedDay);
    if (dayLabelEl) dayLabelEl.textContent = `${getDayLabel(currentSelectedDay)} 일정 (${filtered.length}개)`;
  } else {
    if (dayLabelEl) dayLabelEl.textContent = `전체 일정 (${filtered.length}개)`;
  }
  if (filtered.length === 0) {
    container.innerHTML = `<div class="ios-card p-6 text-center text-gray-400"><i class="ph-bold ph-calendar-x text-3xl mb-1 text-gray-300"></i><p class="text-xs font-medium">등록된 일정이 없습니다.</p><button onclick="openAddScheduleModal()" class="mt-2.5 px-3 py-1.5 bg-blue-50 text-blue-600 font-bold rounded-full text-xs hover:bg-blue-100">+ 새 일정 추가하기</button></div>`;
    return;
  }
  filtered.sort((a, b) => (a.dayIndex !== b.dayIndex ? a.dayIndex - b.dayIndex : (a.time || '').localeCompare(b.time || '')));
  let html = '';
  filtered.forEach(item => {
    const badgeClass = getCategoryBadgeClass(item.category);
    const categoryName = getCategoryName(item.category);
    const googleMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.locationQuery || item.title + ' ' + currentTrip.destination)}`;
    const costKRW = Math.round((item.costLocal || 0) * currentTrip.exchangeRate);
    html += `
      <div class="ios-card p-3.5 relative overflow-hidden transition hover:shadow-md">
        <div class="flex items-center justify-between mb-1.5">
          <div class="flex items-center gap-1.5">
            <span class="text-[10px] font-bold text-gray-400">Day ${item.dayIndex}</span>
            <span class="text-xs font-extrabold text-blue-600">${item.time || '시간 미정'}</span>
            <span class="badge ${badgeClass} text-[10px] py-0.5 px-2">${categoryName}</span>
          </div>
          <button onclick="deleteScheduleItem('${item.id}')" class="text-gray-300 hover:text-red-500 transition text-sm p-1">
            <i class="ph-bold ph-trash"></i>
          </button>
        </div>
        <h4 class="text-sm font-bold text-gray-900 leading-snug mb-1">${item.title}</h4>
        ${item.memo ? `<div class="text-xs text-gray-600 bg-gray-50/90 rounded-lg p-2 mb-2 font-normal border border-gray-100">💡 ${item.memo}</div>` : ''}
        <div class="flex items-center justify-between pt-1 border-t border-gray-100 mt-1">
          <div class="text-xs text-gray-500">
            ${item.costLocal ? `<span>예상: </span><span class="font-bold text-gray-800">${Number(item.costLocal).toLocaleString()} ${currentTrip.currency}</span> <span class="text-[10px] text-gray-400">(${costKRW.toLocaleString()}원)</span>` : '<span class="text-[11px] text-gray-400">비용 없음</span>'}
          </div>
          <div class="flex items-center gap-1.5">
            <a href="${googleMapUrl}" target="_blank" class="px-2.5 py-1 bg-red-50 hover:bg-red-100 text-red-600 font-bold text-[11px] rounded-lg flex items-center gap-1 transition">
              <i class="ph-bold ph-google-logo text-xs"></i> 지도보기
            </a>
            <button onclick="quickAddExpenseFromSchedule('${item.id}')" class="px-2.5 py-1 bg-blue-50 hover:bg-blue-100 text-blue-600 font-bold text-[11px] rounded-lg flex items-center gap-1 transition">
              <i class="ph-bold ph-receipt text-xs"></i> 가계부로
            </button>
          </div>
        </div>
      </div>`;
  });
  container.innerHTML = html;
}

function getCategoryBadgeClass(cat) {
  switch (cat) {
    case 'food': return 'badge-food';
    case 'spot': return 'badge-spot';
    case 'stay': return 'badge-stay';
    case 'transport': return 'badge-transport';
    case 'shopping': return 'badge-shopping';
    default: return 'badge-other';
  }
}

function getCategoryName(cat) {
  switch (cat) {
    case 'food': return '🍱 식비/맛집';
    case 'spot': return '🎟️ 관광명소';
    case 'stay': return '🏨 숙박';
    case 'transport': return '🚇 교통';
    case 'shopping': return '🛍️ 쇼핑';
    case 'cafe': return '☕ 카페/디저트';
    default: return '💡 기타';
  }
}

function renderExpenseList() {
  const container = document.getElementById("expenseList");
  if (!container || !currentTrip) return;
  let filtered = currentTrip.expenses;
  if (currentExpenseCategory !== 'all') {
    filtered = filtered.filter(exp => exp.category === currentExpenseCategory);
  }
  if (filtered.length === 0) {
    container.innerHTML = `<div class="ios-card p-6 text-center text-gray-400"><i class="ph-bold ph-receipt-x text-3xl mb-1 text-gray-300"></i><p class="text-xs font-medium">지출 내역이 없습니다.</p><button onclick="openAddExpenseModal()" class="mt-2.5 px-3 py-1.5 bg-blue-50 text-blue-600 font-bold rounded-full text-xs hover:bg-blue-100">+ 첫 지출 기록하기</button></div>`;
    return;
  }
  filtered.sort((a, b) => b.date.localeCompare(a.date));
  let html = '';
  filtered.forEach(exp => {
    const badgeClass = getCategoryBadgeClass(exp.category);
    const paymentIcon = exp.paymentMethod === 'card' ? '💳 카드' : (exp.paymentMethod === 'transit_card' ? '🚃 교통카드' : '💵 현금');
    html += `
      <div class="ios-card p-3 flex items-center justify-between hover:shadow-sm transition">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl ${badgeClass} flex items-center justify-center text-base shrink-0 font-bold">
            ${exp.category === 'food' ? '🍱' : (exp.category === 'spot' ? '🎟️' : (exp.category === 'transport' ? '🚇' : (exp.category === 'shopping' ? '🛍️' : '🏨')))}
          </div>
          <div>
            <div class="flex items-center gap-1.5">
              <h4 class="text-xs font-bold text-gray-900">${exp.title}</h4>
              <span class="text-[10px] text-gray-400">· ${exp.payer || '나'}</span>
            </div>
            <div class="flex items-center gap-1.5 text-[10px] text-gray-400 mt-0.5">
              <span>${exp.date.substring(5)}</span>
              <span>•</span>
              <span>${paymentIcon}</span>
              ${exp.placeName ? `<span>• ${exp.placeName}</span>` : ''}
            </div>
          </div>
        </div>
        <div class="text-right">
          <div class="text-xs font-extrabold text-gray-900">${Number(exp.amountBase).toLocaleString()}원</div>
          <div class="text-[10px] font-semibold text-blue-600">${Number(exp.amountLocal).toLocaleString()} ${currentTrip.currency}</div>
          <button onclick="deleteExpenseItem('${exp.id}')" class="text-[10px] text-gray-300 hover:text-red-500 transition mt-0.5">삭제</button>
        </div>
      </div>`;
  });
  container.innerHTML = html;
}

function filterExpenseCategory(cat) {
  currentExpenseCategory = cat;
  const buttons = document.querySelectorAll("#expenseCategoryFilter button");
  buttons.forEach(b => {
    b.classList.remove('bg-blue-600', 'text-white');
    b.classList.add('bg-gray-200', 'text-gray-700');
  });
  if (window.event && window.event.currentTarget) {
    window.event.currentTarget.classList.remove('bg-gray-200', 'text-gray-700');
    window.event.currentTarget.classList.add('bg-blue-600', 'text-white');
  }
  renderExpenseList();
}

function populateFormDropdowns() {
  if (!currentTrip) return;
  const totalDays = calculateDaysBetween(currentTrip.startDate, currentTrip.endDate);
  const dayOptions = [];
  for (let i = 1; i <= totalDays; i++) {
    dayOptions.push(`<option value="${i}">${getDayLabel(i)}</option>`);
  }
  const schedDayEl = document.getElementById("scheduleDaySelect");
  if (schedDayEl) schedDayEl.innerHTML = dayOptions.join('');
  const expDayEl = document.getElementById("expenseDaySelect");
  if (expDayEl) expDayEl.innerHTML = dayOptions.join('');

  const placeOptions = ['<option value="">선택 안함</option>'];
  currentTrip.places.forEach(p => placeOptions.push(`<option value="${p.name}">${p.name} (${p.category})</option>`));
  const expPlaceEl = document.getElementById("expensePlaceSelect");
  if (expPlaceEl) expPlaceEl.innerHTML = placeOptions.join('');

  const payerOptions = [];
  currentTrip.participants.forEach(p => payerOptions.push(`<option value="${p}">${p}</option>`));
  const expPayerEl = document.getElementById("expensePayerSelect");
  if (expPayerEl) expPayerEl.innerHTML = payerOptions.join('');

  const currLabelEl = document.getElementById("formLocalCurrencyLabel");
  if (currLabelEl) currLabelEl.textContent = currentTrip.currency;
  const prefixEl = document.getElementById("formCurrencyPrefix");
  if (prefixEl) prefixEl.textContent = currentTrip.currency === 'JPY' ? '¥' : '$';
  const schedCurrEl = document.getElementById("schedCurrencyLabel");
  if (schedCurrEl) schedCurrEl.textContent = currentTrip.currency;
  const modalCurrEl = document.getElementById("modalLocalCurrCode");
  if (modalCurrEl) modalCurrEl.textContent = currentTrip.currency;
}

function calculateKRWConversion() {
  const localInput = parseFloat(document.getElementById("expenseAmountLocal").value) || 0;
  const rate = currentTrip ? currentTrip.exchangeRate : 9.085;
  const krw = Math.round(localInput * rate);
  const disp = document.getElementById("expenseAmountKRWDisplay");
  if (disp) disp.textContent = `${krw.toLocaleString()}원`;
}

function saveExpense(e) {
  if (e) e.preventDefault();
  const localAmount = parseFloat(document.getElementById("expenseAmountLocal").value) || 0;
  if (localAmount <= 0) return alert("금액을 입력해주세요.");
  const title = document.getElementById("expenseTitle").value.trim();
  const category = document.getElementById("expenseCategory").value;
  const payment = document.getElementById("expensePayment").value;
  const dayIdx = parseInt(document.getElementById("expenseDaySelect").value) || 1;
  const place = document.getElementById("expensePlaceSelect").value;
  const payer = document.getElementById("expensePayerSelect").value;

  const targetDate = new Date(currentTrip.startDate);
  targetDate.setDate(targetDate.getDate() + (dayIdx - 1));
  const dateStr = targetDate.toISOString().split('T')[0];
  const amountBase = Math.round(localAmount * currentTrip.exchangeRate);

  const newExpense = {
    id: "exp_" + Date.now(),
    date: dateStr,
    title: title,
    category: category,
    amountLocal: localAmount,
    amountBase: amountBase,
    paymentMethod: payment,
    placeName: place,
    payer: payer,
    memo: ""
  };

  currentTrip.expenses.push(newExpense);
  saveTripToStorage();
  closeModal('addExpenseModal');
  document.getElementById("expenseForm").reset();
  renderHeader();
  renderExpenseList();
  updateAnalyticsCharts();
  renderSettlement();
}

function saveSchedule(e) {
  if (e) e.preventDefault();
  const dayIdx = parseInt(document.getElementById("scheduleDaySelect").value) || 1;
  const time = document.getElementById("scheduleTime").value;
  const title = document.getElementById("scheduleTitle").value.trim();
  const category = document.getElementById("scheduleCategory").value;
  const costLocal = parseFloat(document.getElementById("scheduleCost").value) || 0;
  const query = document.getElementById("scheduleLocationQuery").value.trim();
  const memo = document.getElementById("scheduleMemo").value.trim();

  const targetDate = new Date(currentTrip.startDate);
  targetDate.setDate(targetDate.getDate() + (dayIdx - 1));
  const dateStr = targetDate.toISOString().split('T')[0];

  const newSchedule = {
    id: "it_" + Date.now(),
    dayIndex: dayIdx,
    date: dateStr,
    time: time,
    title: title,
    category: category,
    costLocal: costLocal,
    locationQuery: query || title + ' ' + currentTrip.destination,
    memo: memo,
    isCompleted: false
  };

  currentTrip.itinerary.push(newSchedule);
  saveTripToStorage();
  closeModal('addScheduleModal');
  document.getElementById("scheduleForm").reset();
  renderItineraryList();
}

function quickAddExpenseFromSchedule(itId) {
  const item = currentTrip.itinerary.find(i => i.id === itId);
  if (!item) return;
  openAddExpenseModal();
  document.getElementById("expenseTitle").value = item.title;
  document.getElementById("expenseCategory").value = item.category === 'cafe' ? 'food' : item.category;
  if (item.costLocal) {
    document.getElementById("expenseAmountLocal").value = item.costLocal;
    calculateKRWConversion();
  }
  document.getElementById("expenseDaySelect").value = item.dayIndex;
}

function deleteScheduleItem(id) {
  if (confirm("이 일정을 삭제하시겠습니까?")) {
    currentTrip.itinerary = currentTrip.itinerary.filter(i => i.id !== id);
    saveTripToStorage();
    renderItineraryList();
  }
}

function deleteExpenseItem(id) {
  if (confirm("이 지출 내역을 삭제하시겠습니까?")) {
    currentTrip.expenses = currentTrip.expenses.filter(e => e.id !== id);
    saveTripToStorage();
    renderHeader();
    renderExpenseList();
    updateAnalyticsCharts();
    renderSettlement();
  }
}

function initMap() {
  const mapEl = document.getElementById("map");
  if (!mapEl || typeof L === 'undefined') return;
  if (leafletMap) {
    try { leafletMap.remove(); } catch(e) {}
  }
  try {
    const defaultCenter = [34.6687, 135.5019];
    leafletMap = L.map('map').setView(defaultCenter, 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap' }).addTo(leafletMap);
    renderPlacesList();
  } catch (err) {
    console.warn("Map init failed:", err);
  }
}

function renderPlacesList() {
  const container = document.getElementById("placesList");
  if (!container || !currentTrip) return;
  if (leafletMap) {
    mapMarkers.forEach(m => { try { leafletMap.removeLayer(m); } catch(e) {} });
  }
  mapMarkers = [];
  let html = '';
  currentTrip.places.forEach((p) => {
    if (leafletMap && p.lat && p.lng) {
      try {
        const marker = L.marker([p.lat, p.lng]).addTo(leafletMap);
        const googleMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.googleQuery || p.name)}`;
        marker.bindPopup(`<div style="font-size:12px; line-height:1.4;"><b style="font-size:13px; color:#1e293b;">${p.name}</b><br><span style="color:#f59e0b;">⭐ ${p.rating}</span> · <span>${getCategoryName(p.category)}</span><br><span style="color:#64748b; font-size:11px;">${p.mustTry || ''}</span><br><a href="${googleMapUrl}" target="_blank" style="color:#2563eb; font-weight:bold; text-decoration:underline; display:inline-block; margin-top:4px;">Google 지도에서 열기 ↗</a></div>`);
        mapMarkers.push(marker);
      } catch(e) {}
    }
    const badgeClass = getCategoryBadgeClass(p.category);
    const googleMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.googleQuery || p.name)}`;
    html += `
      <div class="ios-card p-3 hover:shadow-md transition">
        <div class="flex justify-between items-start">
          <div>
            <div class="flex items-center gap-1.5">
              <span class="badge ${badgeClass} text-[10px] py-0.5 px-2">${getCategoryName(p.category)}</span>
              <span class="text-xs font-bold text-amber-500">⭐ ${p.rating}</span>
            </div>
            <h4 class="text-sm font-bold text-gray-900 mt-1">${p.name}</h4>
            <p class="text-xs text-rose-600 font-medium mt-0.5">🍴 추천: ${p.mustTry || '인기 대표 메뉴'}</p>
            <p class="text-[11px] text-gray-400 mt-0.5">${p.address || ''}</p>
          </div>
          <div class="flex flex-col gap-1.5 items-end">
            <a href="${googleMapUrl}" target="_blank" class="px-2.5 py-1.5 bg-red-50 hover:bg-red-100 text-red-600 font-bold text-xs rounded-xl flex items-center gap-1 transition shadow-sm">
              <i class="ph-bold ph-google-logo"></i> 지도 열기
            </a>
            <button onclick="quickAddScheduleFromPlace('${p.name}', '${p.category}')" class="px-2.5 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium text-[11px] rounded-lg">
              + 일정 등록
            </button>
          </div>
        </div>
      </div>`;
  });
  container.innerHTML = html;
}

function resetMapView() {
  if (leafletMap) leafletMap.setView([34.6687, 135.5019], 13);
}

function quickAddScheduleFromPlace(name, cat) {
  openAddScheduleModal();
  document.getElementById("scheduleTitle").value = name;
  document.getElementById("scheduleCategory").value = cat === 'cafe' ? 'food' : cat;
  document.getElementById("scheduleLocationQuery").value = name + ' Osaka';
}

function savePlace(e) {
  if (e) e.preventDefault();
  const name = document.getElementById("placeName").value.trim();
  const cat = document.getElementById("placeCategory").value;
  const rating = document.getElementById("placeRating").value;
  const mustTry = document.getElementById("placeMustTry").value.trim();
  const query = document.getElementById("placeGoogleQuery").value.trim();
  const baseLat = 34.6687 + (Math.random() - 0.5) * 0.02;
  const baseLng = 135.5019 + (Math.random() - 0.5) * 0.02;

  const newPlace = {
    id: "pl_" + Date.now(),
    name: name,
    category: cat,
    rating: rating,
    mustTry: mustTry,
    lat: baseLat,
    lng: baseLng,
    googleQuery: query,
    address: query
  };

  currentTrip.places.push(newPlace);
  saveTripToStorage();
  closeModal('addPlaceModal');
  document.getElementById("placeForm").reset();
  renderPlacesList();
}

async function fetchLiveExchangeRate(notifyUser = false) {
  try {
    const res = await fetch(`https://open.er-api.com/v6/latest/${currentTrip.currency}`);
    if (res.ok) {
      const data = await res.json();
      if (data.rates && data.rates.KRW) {
        currentTrip.exchangeRate = data.rates.KRW;
        currentTrip.rateLastUpdated = new Date().toLocaleTimeString();
        saveTripToStorage();
        renderHeader();
        updateExchangeModalView();
        if (notifyUser) alert(`실시간 환율 업데이트 완료!
100 ${currentTrip.currency} = ${(currentTrip.exchangeRate * 100).toFixed(2)} KRW`);
        return;
      }
    }
  } catch (err) {
    console.warn("Live rate API fetch failed:", err);
  }
  if (notifyUser) {
    alert(`최신 실시간 환율을 확인했습니다.
100 ${currentTrip.currency} = ${(currentTrip.exchangeRate * 100).toFixed(2)} KRW`);
  }
}

function openExchangeModal() {
  updateExchangeModalView();
  openModal('exchangeModal');
}

function updateExchangeModalView() {
  const rate100 = (currentTrip.exchangeRate * 100).toFixed(2);
  const rateTextEl = document.getElementById("modalCurrentRateText");
  if (rateTextEl) rateTextEl.textContent = `100 ${currentTrip.currency} = ${rate100} KRW`;
  const inputEl = document.getElementById("customRateInput");
  if (inputEl) inputEl.value = rate100;
  const timeEl = document.getElementById("modalRateUpdatedTime");
  if (timeEl) timeEl.textContent = `기준 시간: ${currentTrip.rateLastUpdated || '오늘'}`;
}

function saveCustomRate() {
  const custom100 = parseFloat(document.getElementById("customRateInput").value);
  if (!custom100 || custom100 <= 0) return alert("올바른 환율 값을 입력해주세요.");
  currentTrip.exchangeRate = custom100 / 100;
  currentTrip.rateLastUpdated = "수동 지정 환율";
  currentTrip.expenses.forEach(exp => {
    exp.amountBase = Math.round(exp.amountLocal * currentTrip.exchangeRate);
  });
  saveTripToStorage();
  renderHeader();
  renderExpenseList();
  updateAnalyticsCharts();
  renderSettlement();
  closeModal('exchangeModal');
  alert(`환율이 100 ${currentTrip.currency} = ${custom100}원으로 적용되었습니다!`);
}

function initAnalytics() {
  renderSettlement();
  setTimeout(() => updateAnalyticsCharts(), 100);
}

function updateAnalyticsCharts() {
  if (!currentTrip || typeof Chart === 'undefined') return;
  const categoryTotals = { food: 0, transport: 0, spot: 0, shopping: 0, stay: 0, other: 0 };
  currentTrip.expenses.forEach(e => { categoryTotals[e.category] = (categoryTotals[e.category] || 0) + e.amountBase; });

  const catCtx = document.getElementById("categoryChart");
  if (catCtx) {
    if (categoryChartInstance) { try { categoryChartInstance.destroy(); } catch(e) {} }
    try {
      categoryChartInstance = new Chart(catCtx, {
        type: 'doughnut',
        data: {
          labels: ['식비', '교통', '관광', '쇼핑', '숙박', '기타'],
          datasets: [{
            data: [categoryTotals.food, categoryTotals.transport, categoryTotals.spot, categoryTotals.shopping, categoryTotals.stay, categoryTotals.other],
            backgroundColor: ['#ef4444', '#22c55e', '#6366f1', '#ec4899', '#f59e0b', '#94a3b8'],
            borderWidth: 2,
            borderColor: '#ffffff'
          }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'right', labels: { boxWidth: 10, font: { size: 10 } } } }, cutout: '65%' }
      });
    } catch(e) {}
  }

  const totalDays = calculateDaysBetween(currentTrip.startDate, currentTrip.endDate);
  const dailyLabels = [];
  const dailyData = [];
  for (let i = 1; i <= totalDays; i++) {
    const targetDate = new Date(currentTrip.startDate);
    targetDate.setDate(targetDate.getDate() + (i - 1));
    const dateStr = targetDate.toISOString().split('T')[0];
    dailyLabels.push(`Day ${i}`);
    const spent = currentTrip.expenses.filter(e => e.date === dateStr).reduce((sum, e) => sum + e.amountBase, 0);
    dailyData.push(spent);
  }

  const dailyCtx = document.getElementById("dailyChart");
  if (dailyCtx) {
    if (dailyChartInstance) { try { dailyChartInstance.destroy(); } catch(e) {} }
    try {
      dailyChartInstance = new Chart(dailyCtx, {
        type: 'bar',
        data: { labels: dailyLabels, datasets: [{ label: '지출액 (원)', data: dailyData, backgroundColor: '#3b82f6', borderRadius: 6 }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { display: false }, x: { grid: { display: false }, ticks: { font: { size: 10 } } } } }
      });
    } catch(e) {}
  }
}

function renderSettlement() {
  const participantsContainer = document.getElementById("participantsContainer");
  const resultContainer = document.getElementById("settlementResult");
  if (!participantsContainer || !resultContainer || !currentTrip) return;

  let partHtml = '';
  currentTrip.participants.forEach(p => {
    partHtml += `<span class="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold flex items-center gap-1">${p}</span>`;
  });
  partHtml += `<button onclick="addParticipantPrompt()" class="px-2.5 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold">+ 친구 추가</button>`;
  participantsContainer.innerHTML = partHtml;

  const totalBase = currentTrip.expenses.reduce((sum, e) => sum + e.amountBase, 0);
  const count = currentTrip.participants.length || 1;
  const perPersonBase = Math.round(totalBase / count);
  const perPersonLocal = Math.round((totalBase / count) / currentTrip.exchangeRate);

  const paidMap = {};
  currentTrip.participants.forEach(p => paidMap[p] = 0);
  currentTrip.expenses.forEach(e => {
    const payer = e.payer || currentTrip.participants[0];
    paidMap[payer] = (paidMap[payer] || 0) + e.amountBase;
  });

  let settlementLines = `
    <div class="flex justify-between items-center pb-2 border-b border-emerald-200 mb-2">
      <span class="font-bold text-gray-700">1인당 부담 금액 (${count}명):</span>
      <span class="text-sm font-extrabold text-emerald-700">${perPersonBase.toLocaleString()}원 <span class="text-[11px] text-gray-500 font-normal">(${perPersonLocal.toLocaleString()} ${currentTrip.currency})</span></span>
    </div>
    <div class="space-y-1">`;

  currentTrip.participants.forEach(p => {
    const paid = paidMap[p] || 0;
    const diff = paid - perPersonBase;
    if (diff > 0) {
      settlementLines += `<div class="flex justify-between text-[11px]"><span class="text-gray-700">· <b>${p}</b> (지출 ${paid.toLocaleString()}원)</span><span class="text-blue-600 font-bold">+${diff.toLocaleString()}원 받을 돈</span></div>`;
    } else if (diff < 0) {
      settlementLines += `<div class="flex justify-between text-[11px]"><span class="text-gray-700">· <b>${p}</b> (지출 ${paid.toLocaleString()}원)</span><span class="text-red-500 font-bold">${Math.abs(diff).toLocaleString()}원 보낼 돈</span></div>`;
    } else {
      settlementLines += `<div class="flex justify-between text-[11px]"><span class="text-gray-700">· <b>${p}</b> (지출 ${paid.toLocaleString()}원)</span><span class="text-gray-400">정산 완료</span></div>`;
    }
  });

  settlementLines += '</div>';
  resultContainer.innerHTML = settlementLines;
}

function addParticipantPrompt() {
  const name = prompt("함께 정산할 친구의 이름을 입력하세요:");
  if (name && name.trim()) {
    currentTrip.participants.push(name.trim());
    saveTripToStorage();
    populateFormDropdowns();
    renderSettlement();
  }
}

function openNewTripModal() {
  openModal('newTripModal');
}

function handleDestinationPresetChange() {
  const preset = document.getElementById("newTripPreset").value;
  const titleInput = document.getElementById("newTripTitle");
  if (preset === 'JP-Osaka') titleInput.value = "오사카 가을 힐링 미식 여행";
  else if (preset === 'JP-Tokyo') titleInput.value = "도쿄 도심 & 쇼핑 투어";
  else if (preset === 'JP-Fukuoka') titleInput.value = "후쿠오카 온천 & 라멘 여행";
  else if (preset === 'TW-Taipei') titleInput.value = "타이베이 야시장 & 지우펀 여행";
  else if (preset === 'VN-Danang') titleInput.value = "다낭 & 호이안 휴양 여행";
  else if (preset === 'TH-Bangkok') titleInput.value = "방콕 미식 & 마사지 힐링";
  else if (preset === 'US-Hawaii') titleInput.value = "하와이 오아후 비치 투어";
  else if (preset === 'FR-Paris') titleInput.value = "파리 미술관 & 미식 투어";
}

function createNewTrip(e) {
  if (e) e.preventDefault();
  const title = document.getElementById("newTripTitle").value.trim();
  const preset = document.getElementById("newTripPreset").value;
  const budget = parseFloat(document.getElementById("newTripBudget").value) || 1500000;
  const start = document.getElementById("newTripStartDate").value;
  const end = document.getElementById("newTripEndDate").value;

  if (new Date(start) > new Date(end)) return alert("종료일은 시작일 이후여야 합니다.");

  let dest = "일본 오사카";
  let flag = "🇯🇵";
  let curr = "JPY";
  let rate = 9.085;

  if (preset === 'JP-Tokyo') { dest = "일본 도쿄"; curr = "JPY"; rate = 9.085; }
  else if (preset === 'JP-Fukuoka') { dest = "일본 후쿠오카"; curr = "JPY"; rate = 9.085; }
  else if (preset === 'TW-Taipei') { dest = "대만 타이베이"; flag = "🇹🇼"; curr = "TWD"; rate = 42.5; }
  else if (preset === 'VN-Danang') { dest = "베트남 다낭"; flag = "🇻🇳"; curr = "VND"; rate = 0.054; }
  else if (preset === 'TH-Bangkok') { dest = "태국 방콕"; flag = "🇹🇭"; curr = "THB"; rate = 38.2; }
  else if (preset === 'US-Hawaii') { dest = "미국 하와이"; flag = "🇺🇸"; curr = "USD"; rate = 1380.0; }
  else if (preset === 'FR-Paris') { dest = "프랑스 파리"; flag = "🇫🇷"; curr = "EUR"; rate = 1510.0; }

  currentTrip = {
    id: "trip_" + Date.now(),
    title: title,
    destination: dest,
    flag: flag,
    currency: curr,
    baseCurrency: "KRW",
    exchangeRate: rate,
    rateLastUpdated: "방금 전",
    startDate: start,
    endDate: end,
    totalBudget: budget,
    participants: ["나 (작성자)", "친구1"],
    itinerary: [],
    expenses: [],
    places: []
  };

  saveTripToStorage();
  closeModal('newTripModal');
  initApp();
  switchTab('itinerary');
  alert(`'${title}' 여행이 성공적으로 생성되었습니다!`);
}

function switchTab(tabName) {
  const tabs = ['itinerary', 'expense', 'places', 'analytics'];
  tabs.forEach(t => {
    const el = document.getElementById(`tab-${t}`);
    const nav = document.getElementById(`nav-${t}`);
    if (el) el.classList.add('hidden');
    if (nav) nav.classList.remove('active');
  });

  const activeEl = document.getElementById(`tab-${tabName}`);
  const activeNav = document.getElementById(`nav-${tabName}`);
  if (activeEl) activeEl.classList.remove('hidden');
  if (activeNav) activeNav.classList.add('active');

  if (tabName === 'places') {
    setTimeout(() => { if (leafletMap) { try { leafletMap.invalidateSize(); } catch(e) {} } }, 200);
  } else if (tabName === 'analytics') {
    setTimeout(() => updateAnalyticsCharts(), 150);
  }
}

function openModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.add('active');
}

function closeModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.remove('active');
}

function closeModalOnOutsideClick(e, id) {
  if (e.target.id === id) closeModal(id);
}

function openAddExpenseModal() {
  populateFormDropdowns();
  openModal('addExpenseModal');
}

function openAddScheduleModal() {
  populateFormDropdowns();
  openModal('addScheduleModal');
}

function openAddPlaceModal() {
  openModal('addPlaceModal');
}

function handleFabClick() {
  const activeNav = document.querySelector(".nav-item.active");
  if (activeNav && activeNav.id === 'nav-expense') openAddExpenseModal();
  else if (activeNav && activeNav.id === 'nav-places') openAddPlaceModal();
  else openAddScheduleModal();
}

function previewGoogleMapSearch() {
  const q = document.getElementById("scheduleLocationQuery").value || document.getElementById("scheduleTitle").value;
  if (!q) return alert("검색할 장소명을 입력하세요.");
  window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q + ' ' + (currentTrip ? currentTrip.destination : ''))}`, '_blank');
}

function toggleFrameMode() {
  const frame = document.getElementById("iphoneFrame");
  const label = document.getElementById("frameModeLabel");
  if (!frame) return;
  if (frame.classList.contains("fullscreen-mode")) {
    frame.classList.remove("fullscreen-mode");
    if (label) label.textContent = "전체화면 전환";
  } else {
    frame.classList.add("fullscreen-mode");
    if (label) label.textContent = "아이폰 프레임 전환";
  }
  setTimeout(() => { if (leafletMap) { try { leafletMap.invalidateSize(); } catch(e) {} } }, 300);
}

function openShareModal() {
  openModal('shareModal');
}

function generateKakaoSummaryText() {
  if (!currentTrip) return "";
  const totalBase = currentTrip.expenses.reduce((sum, e) => sum + e.amountBase, 0);
  const totalLocal = currentTrip.expenses.reduce((sum, e) => sum + e.amountLocal, 0);
  const count = currentTrip.participants.length || 1;
  const perPersonBase = Math.round(totalBase / count);

  const paidMap = {};
  currentTrip.participants.forEach(p => paidMap[p] = 0);
  currentTrip.expenses.forEach(e => {
    const payer = e.payer || currentTrip.participants[0];
    paidMap[payer] = (paidMap[payer] || 0) + e.amountBase;
  });

  let text = `✈️ [${currentTrip.title}]
📍 여행지: ${currentTrip.destination}
📅 일정: ${currentTrip.startDate} ~ ${currentTrip.endDate}
💱 적용 환율: 100 ${currentTrip.currency} = ${(currentTrip.exchangeRate * 100).toFixed(1)}원
---------------------------
💰 총 사용 금액: ${totalBase.toLocaleString()}원 (${totalLocal.toLocaleString()} ${currentTrip.currency})
👥 1인당 부담금 (${count}명): ${perPersonBase.toLocaleString()}원

📊 [정산 내역]
`;

  currentTrip.participants.forEach(p => {
    const paid = paidMap[p] || 0;
    const diff = paid - perPersonBase;
    if (diff > 0) text += `· ${p}: +${diff.toLocaleString()}원 (받을 돈)
`;
    else if (diff < 0) text += `· ${p}: -${Math.abs(diff).toLocaleString()}원 (보낼 돈)
`;
    else text += `· ${p}: 정산 완료 (0원)
`;
  });

  text += `
🗺️ [주요 방문 일정]
`;
  currentTrip.itinerary.slice(0, 5).forEach(item => {
    text += `· Day ${item.dayIndex} ${item.time || ''}: ${item.title}
`;
  });
  if (currentTrip.itinerary.length > 5) text += `· 외 ${currentTrip.itinerary.length - 5}개 일정
`;
  text += `
📱 TravelLog 앱에서 작성됨`;
  return text;
}

function copySettlementSummary() {
  const text = generateKakaoSummaryText();
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => alert("카카오톡 전송용 정산 요약본이 클립보드에 복사되었습니다!
카카오톡 대화방에 붙여넣기(Ctrl+V) 하세요."));
  } else {
    prompt("아래 텍스트를 복사하여 카카오톡에 공유하세요:", text);
  }
}

async function shareToKakaoTalkOrSystem() {
  const text = generateKakaoSummaryText();
  if (navigator.share) {
    try { await navigator.share({ title: currentTrip.title + " 정산 및 일정", text: text }); } catch (err) {}
  } else {
    copySettlementSummary();
  }
}

function exportTripJSON() {
  if (!currentTrip) return;
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(currentTrip, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `${currentTrip.title.replace(/\s+/g, '_')}_백업.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

function importTripJSON(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(evt) {
    try {
      const imported = JSON.parse(evt.target.result);
      if (imported.title && imported.destination) {
        currentTrip = imported;
        saveTripToStorage();
        initApp();
        closeModal('shareModal');
        alert(`'${currentTrip.title}' 여행 데이터를 성공적으로 불러왔습니다!`);
      } else {
        alert("올바른 여행 데이터 파일 형식이 아닙니다.");
      }
    } catch (err) {
      alert("오류: " + err.message);
    }
  };
  reader.readAsText(file);
}

function openIPhoneConnectModal() {
  openModal('iphoneModal');
  const host = window.location.hostname;
  const port = window.location.port || '5173';
  let targetUrl = `http://${host}:${port}`;
  if (host === 'localhost' || host === '127.0.0.1') {
    targetUrl = `http://59.15.234.230:${port}`;
  }

  const qrContainer = document.getElementById("qrcodeCanvas");
  const ipText = document.getElementById("lanIpAddressText");
  if (ipText) {
    ipText.innerHTML = `<div class="flex items-center justify-between gap-2 w-full"><span class="text-xs font-mono font-bold text-blue-700 select-all">${targetUrl}</span><button onclick="copyToClipboard('${targetUrl}')" class="px-2 py-1 bg-blue-100 hover:bg-blue-200 text-blue-700 text-[11px] font-bold rounded">복사</button></div>`;
  }
  if (qrContainer) {
    qrContainer.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(targetUrl)}" alt="QR Code" class="w-36 h-36 rounded-lg border border-gray-200 shadow-sm" />`;
  }
}

function copyToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => alert("아이폰 접속 주소가 복사되었습니다: " + text));
  } else {
    prompt("접속 주소를 복사하세요:", text);
  }
}

// Window Global Bindings
window.toggleFrameMode = toggleFrameMode;
window.resetToOsakaSample = resetToOsakaSample;
window.openNewTripModal = openNewTripModal;
window.openIPhoneConnectModal = openIPhoneConnectModal;
window.openShareModal = openShareModal;
window.switchTab = switchTab;
window.selectDayFilter = selectDayFilter;
window.filterExpenseCategory = filterExpenseCategory;
window.openAddExpenseModal = openAddExpenseModal;
window.openAddScheduleModal = openAddScheduleModal;
window.openAddPlaceModal = openAddPlaceModal;
window.openExchangeModal = openExchangeModal;
window.saveExpense = saveExpense;
window.saveSchedule = saveSchedule;
window.savePlace = savePlace;
window.saveCustomRate = saveCustomRate;
window.createNewTrip = createNewTrip;
window.closeModal = closeModal;
window.closeModalOnOutsideClick = closeModalOnOutsideClick;
window.quickAddExpenseFromSchedule = quickAddExpenseFromSchedule;
window.quickAddScheduleFromPlace = quickAddScheduleFromPlace;
window.deleteScheduleItem = deleteScheduleItem;
window.deleteExpenseItem = deleteExpenseItem;
window.calculateKRWConversion = calculateKRWConversion;
window.fetchLiveExchangeRate = fetchLiveExchangeRate;
window.addParticipantPrompt = addParticipantPrompt;
window.handleFabClick = handleFabClick;
window.previewGoogleMapSearch = previewGoogleMapSearch;
window.resetMapView = resetMapView;
window.copySettlementSummary = copySettlementSummary;
window.shareToKakaoTalkOrSystem = shareToKakaoTalkOrSystem;
window.exportTripJSON = exportTripJSON;
window.importTripJSON = importTripJSON;
window.copyToClipboard = copyToClipboard;
window.handleDestinationPresetChange = handleDestinationPresetChange;
