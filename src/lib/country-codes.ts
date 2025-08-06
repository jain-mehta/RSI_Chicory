// This file contains country data for the phone number input.

export type Country = {
  name: string;
  code: string; // ISO 3166-1 alpha-2 country code
  dialCode: string;
};

export const COUNTRIES: Country[] = [
    { name: "United States", code: "US", dialCode: "+1" },
    { name: "India", code: "IN", dialCode: "+91" },
    { name: "United Kingdom", code: "GB", dialCode: "+44" },
    { name: "Australia", code: "AU", dialCode: "+61" },
    { name: "Germany", code: "DE", dialCode: "+49" },
    { name: "France", code: "FR", dialCode: "+33" },
    { name: "China", code: "CN", dialCode: "+86" },
    { name: "Japan", code: "JP", dialCode: "+81" },
    { name: "Canada", code: "CA", dialCode: "+1" },
    { name: "Brazil", code: "BR", dialCode: "+55" },
    { name: "South Africa", code: "ZA", dialCode: "+27" },
    { name: "Afghanistan", code: "AF", dialCode: "+93" },
    { name: "Albania", code: "AL", dialCode: "+355" },
    { name: "Algeria", code: "DZ", dialCode: "+213" },
    { name: "Argentina", code: "AR", dialCode: "+54" },
    { name: "Belgium", code: "BE", dialCode: "+32" },
    { name: "Chile", code: "CL", dialCode: "+56" },
    { name: "Colombia", code: "CO", dialCode: "+57" },
    { name: "Egypt", code: "EG", dialCode: "+20" },
    { name: "Indonesia", code: "ID", dialCode: "+62" },
    { name: "Iran", code: "IR", dialCode: "+98" },
    { name: "Italy", code: "IT", dialCode: "+39" },
    { name: "Mexico", code: "MX", dialCode: "+52" },
    { name: "Netherlands", code: "NL", dialCode: "+31" },
    { name: "New Zealand", code: "NZ", dialCode: "+64" },
    { name: "Nigeria", code: "NG", dialCode: "+234" },
    { name: "Pakistan", code: "PK", dialCode: "+92" },
    { name: "Peru", code: "PE", dialCode: "+51" },
    { name: "Philippines", code: "PH", dialCode: "+63" },
    { name: "Poland", code: "PL", dialCode: "+48" },
    { name: "Russia", code: "RU", dialCode: "+7" },
    { name: "Saudi Arabia", code: "SA", dialCode: "+966" },
    { name: "Singapore", code: "SG", dialCode: "+65" },
    { name: "South Korea", code: "KR", dialCode: "+82" },
    { name: "Spain", code: "ES", dialCode: "+34" },
    { name: "Sweden", code: "SE", dialCode: "+46" },
    { name: "Switzerland", code: "CH", dialCode: "+41" },
    { name: "Thailand", code: "TH", dialCode: "+66" },
    { name: "Turkey", code: "TR", dialCode: "+90" },
    { name: "Ukraine", code: "UA", dialCode: "+380" },
    { name: "United Arab Emirates", code: "AE", dialCode: "+971" },
    { name: "Vietnam", code: "VN", dialCode: "+84" },
];
