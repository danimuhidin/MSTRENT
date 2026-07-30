export function buildWhatsAppMessage(message) {
    return encodeURIComponent(message);
}

export function buildWhatsAppLink(phone, message) {
    const normalizedPhone = String(phone || "").replace(/[^0-9]/g, "");

    return `https://wa.me/${normalizedPhone}?text=${buildWhatsAppMessage(message)}`;
}

export function buildCompanyWhatsAppLink(
    company,
    message = "Halo, saya ingin bertanya lebih lanjut.",
) {
    return buildWhatsAppLink(company?.whatsapp, message);
}
