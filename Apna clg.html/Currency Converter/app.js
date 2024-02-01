
const countryList = {
	// currency: country
	// api for flags - https://flagsapi.com/
	AED: "AE",AFN: "AF",
	XCD: "AG",
	ALL: "AL",
	AMD: "AM",
	ANG: "AN",
	AOA: "AO",
	AQD: "AQ",
	ARS: "AR",
	AUD: "AU",
	AZN: "AZ",
	BAM: "BA",
	BBD: "BB",
	BDT: "BD",
	XOF: "BE",
	BGN: "BG",
	BHD: "BH",
	BIF: "BI",
	BMD: "BM",
	BND: "BN",
	BOB: "BO",
	BRL: "BR",
	BSD: "BS",
	NOK: "BV",
	BWP: "BW",
	BYR: "BY",
	BZD: "BZ",
	CAD: "CA",
	CDF: "CD",
	XAF: "CF",
	CHF: "CH",
	CLP: "CL",
	CNY: "CN",
	COP: "CO",
	CRC: "CR",
	CUP: "CU",
	CVE: "CV",
	CYP: "CY",
	CZK: "CZ",
	DJF: "DJ",
	DKK: "DK",
	DOP: "DO",
	DZD: "DZ",
	ECS: "EC",
	EEK: "EE",
	EGP: "EG",
	ETB: "ET",
	EUR: "FR",
	FJD: "FJ",
	FKP: "FK",
	GBP: "GB",
	GEL: "GE",
	GGP: "GG",
	GHS: "GH",
	GIP: "GI",
	GMD: "GM",
	GNF: "GN",
	GTQ: "GT",
	GYD: "GY",
	HKD: "HK",
	HNL: "HN",
	HRK: "HR",
	HTG: "HT",
	HUF: "HU",
	IDR: "ID",
	ILS: "IL",
	INR: "IN",
	IQD: "IQ",
	IRR: "IR",
	ISK: "IS",
	JMD: "JM",
	JOD: "JO",
	JPY: "JP",
	KES: "KE",
	KGS: "KG",
	KHR: "KH",
	KMF: "KM",
	KPW: "KP",
	KRW: "KR",
	KWD: "KW",
	KYD: "KY",
	KZT: "KZ",
	LAK: "LA",
	LBP: "LB",
	LKR: "LK",
	LRD: "LR",
	LSL: "LS",
	LTL: "LT",
	LVL: "LV",
	LYD: "LY",
	MAD: "MA",
	MDL: "MD",
	MGA: "MG",
	MKD: "MK",
	MMK: "MM",
	MNT: "MN",
	MOP: "MO",
	MRO: "MR",
	MTL: "MT",
	MUR: "MU",
	MVR: "MV",
	MWK: "MW",
	MXN: "MX",
	MYR: "MY",
	MZN: "MZ",
	NAD: "NA",
	XPF: "NC",
	NGN: "NG",
	NIO: "NI",
	NPR: "NP",
	NZD: "NZ",
	OMR: "OM",
	PAB: "PA",
	PEN: "PE",
	PGK: "PG",
	PHP: "PH",
	PKR: "PK",
	PLN: "PL",
	PYG: "PY",
	QAR: "QA",
	RON: "RO",
	RSD: "RS",
	RUB: "RU",
	RWF: "RW",
	SAR: "SA",
	SBD: "SB",
	SCR: "SC",
	SDG: "SD",
	SEK: "SE",
	SGD: "SG",
	SKK: "SK",
	SLL: "SL",
	SOS: "SO",
	SRD: "SR",
	STD: "ST",
	SVC: "SV",
	SYP: "SY",
	SZL: "SZ",
	THB: "TH",
	TJS: "TJ",
	TMT: "TM",
	TND: "TN",
	TOP: "TO",
	TRY: "TR",
	TTD: "TT",
	TWD: "TW",
	TZS: "TZ",
	UAH: "UA",
	UGX: "UG",
	USD: "US",
	UYU: "UY",
	UZS: "UZ",
	VEF: "VE",
	VND: "VN",
	VUV: "VU",
	YER: "YE",
	ZAR: "ZA",
	ZMK: "ZM",
	ZWD: "ZW",
  };



const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"
// const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/aud/jpy.json"

// import countryList from './codes.js'; // Importing the countryList variable from codes.js

const dropdowSel = document.querySelectorAll(".dropdown select");
// selecting both select - to and from
const btn = document.querySelector("button");
// const btn = document.querySelector("form button")
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropdowSel) {
	for (let currCode in countryList) {
		// ek ek country code ke liye option add karenge
		let newOption = document.createElement("option");
		newOption.innerText = currCode;
		newOption.value = currCode;
		// This value is what gets sent to the server when the form containing the <option> element is submitted.
		// check form lecture for more details
		
		// initially to setfrom - usd and to - inr
		if (select.name === "from" && currCode === "USD"){
			newOption.selected = "selected";
		} else if (select.name === "to" && currCode === "INR") {
			newOption.selected = "selected";}

		// countryList me jitni bhi countries hai unko individual option me convert kar rahe hai and select ke andar un options ko add kar rahe hai 
		select.append(newOption);
	}
	
	select.addEventListener("change", (evt) => {
		updateFlag(evt.target);
	});
}


// jab country change kare to saath me flag bhi change ho
// element is random variable we can give any random name we want
const updateFlag = (element) => {
	// element k andar hamare pass select hai, select ke andar img kaha par aati hai- select ke andar parent me jana hai
	// console.log(element);
	let currCode = element.value;
	// console.log(currCode);
	let countryCode = countryList[currCode];
	let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
	img = element.parentElement.querySelector("img");
	img.src = newSrc
	
}

// now to get exchange rate
btn.addEventListener("click", async (evt) => {
	evt.preventDefault();
	// access amount
	let amount = document.querySelector(".amount input");
	// let amount = document.querySelector("form input");
	let amtVal = amount.value;
	// console.log(amtVal);
	if (amtVal === "" || amtVal < 1) {
		amtVal = 1;
		amount.value = "1"
	}


	// ish url pe request bhejenge to exchange rate aayega
	const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
	// console.log(fromCurr, toCurr);
	// but this is entire element and we just need values
	// console.log(fromCurr.value.toLowerCase(), toCurr.value.toLowerCase());
	// values are coming in uppercase and url don't work on uppercase so convert to lower case
	let response = await fetch(URL);
	// console.log(response);
	let data = await response.json();
	// console.log(data);
	let rate = data[toCurr.value.toLowerCase()];
	// console.log(rate);
	// console.log(amount);

	let finalAmount = amtVal * rate;
	msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`
});













// for(currCode in countryList) {
	// console.log(currCode, countryList[currCode]);
// }

