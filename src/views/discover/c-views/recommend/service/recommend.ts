import hyRequest from "@/service";

export default function getBanners() {
    return hyRequest.get({
        url:'/backend/banner'
    })
}