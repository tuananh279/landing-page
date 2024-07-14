import { ImageLocalDeploy, ImagePrivateCloud, ImagePublicCloud } from './../components/image-svg';
import { IDeployItem, IFeatureItem, IGuideQuestion, IOverallItem } from "./interfaces";

export const DATA_FEATURE_LIST:IFeatureItem[] = [
    {
        index: 0, 
        title: 'Phòng họp ảo',
        content: 'Kết nối, gặp gỡ mọi người qua không gian phòng họp trực tuyến. Thiết lập quyền trong phòng họp.'
    },
    {
        index: 1, 
        title: 'Tương tác thời gian thực',
        content: 'Nhắn tin, gửi tài liệu, giơ tay phát biểu, gửi phản ứng, bình chọn,... ngay trong cuộc họp giúp bạn trao đổi dễ dàng.'
    },
    {
        index: 2, 
        title: 'Ghi âm, ghi hình',
        content: 'Ghi lại thông minh những gì diễn ra trong cuộc họp, bao gồm âm thanh và hình ảnh sắc nét.'
    },
    {
        index: 3, 
        title: 'Quản trị',
        content: 'Quản Phân hệ quản lý giúp bạn lên lịch họp, thiết lập quyền phòng họp, quản lý các bản ghi hình, bảng trắng, ...'
    }
]

export const DATA_ADVANCE_LIST:IFeatureItem[] = [
    {
        index: 0, 
        title: 'Video chất lượng cao',
        content: 'Xem video với hình ảnh rõ nét, ánh sáng chuyên nghiệp cùng âm thanh sống động.'
    },
    {
        index: 1, 
        title: 'Lọc tiếng ồn',
        content: 'Giảm bớt tạp âm và giảm nhiễu.'
    },
    {
        index: 2, 
        title: 'Phụ đề trực tiếp',
        content: 'Xem phụ đề theo thời gian thực khi mọi người phát biển trong cuộc họp.'
    },
    {
        index: 3, 
        title: 'Biên bản cuộc họp',
        content: 'Xem biên bản đầy đủ và tóm tắt nội dung sau khi kết thúc cuộc họp.'
    }
]

export const DATA_INTEGRATION_LIST = [
    "Tích hợp nhiều phương thức thường dùng",
    "Phiên bản dành cho cả Android và IOS",
    "hhh",
    "hhh"
]

export const DATA_DEPLOY_LIST:IDeployItem[] = [
    {
        index: 0, 
        title: "Triển khai cloud công cộng",
        content: "Triển khai cloud công cộng là gì, là phần mềm có abcxyz một hai ba bốn năm",
        image: ImagePublicCloud({className: 'm-auto 2xl:m-0'})
    },
    {
        index: 1, 
        title: "Triển khai cloud công cộng",
        content: "Triển khai cloud công cộng là gì, là phần mềm có abcxyz một hai ba bốn năm",
        image: ImagePrivateCloud({className: 'm-auto 2xl:m-0'})
    },
    {
        index: 2, 
        title: "Triển khai cloud công cộng",
        content: "Triển khai cloud công cộng là gì, là phần mềm có abcxyz một hai ba bốn năm",
        image: ImageLocalDeploy({className: 'm-auto 2xl:m-0'})
    }
]

export const DATA_GUIDE_QUESTION:IGuideQuestion[] = [
    {
        index: 0,
        title: "Sự khác biệt giữa cuộc họp qua mạng và cuộc họp trực tuyến là gì?",
        content: "Cuộc họp trực tuyến hỗ trợ cộng tác trong thời gian thực, tăng năng suất, tiết kiệm thời gian và giúp những người đang làm việc từ xa cảm thấy bớt cô độc cũng như thêm phần gắn kết. Nếu người dự trong hội thảo web nhóm không muốn xuất hiện trên camera, họ luôn có thể chọn tắt camera và chỉ bật micrô. Một số nền tảng họp trực tuyến thậm chí còn cho phép mọi người làm mờ hoặc thay đổi nền để giúp bảo vệ quyền riêng tư mà không làm mất khả năng kết nối trực diện."
    },
    {
        index: 1,
        title: "Tôi cần thiết bị gì để họp qua mạng?",
        content: "Cuộc họp trực tuyến hỗ trợ cộng tác trong thời gian thực, tăng năng suất, tiết kiệm thời gian và giúp những người đang làm việc từ xa cảm thấy bớt cô độc cũng như thêm phần gắn kết. Nếu người dự trong hội thảo web nhóm không muốn xuất hiện trên camera, họ luôn có thể chọn tắt camera và chỉ bật micrô. Một số nền tảng họp trực tuyến thậm chí còn cho phép mọi người làm mờ hoặc thay đổi nền để giúp bảo vệ quyền riêng tư mà không làm mất khả năng kết nối trực diện."
    },
    {
        index: 2,
        title: "Tại sao cần sử dụng phần mềm họp qua mạng?",
        content: "Cuộc họp trực tuyến hỗ trợ cộng tác trong thời gian thực, tăng năng suất, tiết kiệm thời gian và giúp những người đang làm việc từ xa cảm thấy bớt cô độc cũng như thêm phần gắn kết. Nếu người dự trong hội thảo web nhóm không muốn xuất hiện trên camera, họ luôn có thể chọn tắt camera và chỉ bật micrô. Một số nền tảng họp trực tuyến thậm chí còn cho phép mọi người làm mờ hoặc thay đổi nền để giúp bảo vệ quyền riêng tư mà không làm mất khả năng kết nối trực diện."
    },
    {
        index: 3,
        title: "Tại sao cần sử dụng phần mềm họp qua mạng?",
        content: "Cuộc họp trực tuyến hỗ trợ cộng tác trong thời gian thực, tăng năng suất, tiết kiệm thời gian và giúp những người đang làm việc từ xa cảm thấy bớt cô độc cũng như thêm phần gắn kết. Nếu người dự trong hội thảo web nhóm không muốn xuất hiện trên camera, họ luôn có thể chọn tắt camera và chỉ bật micrô. Một số nền tảng họp trực tuyến thậm chí còn cho phép mọi người làm mờ hoặc thay đổi nền để giúp bảo vệ quyền riêng tư mà không làm mất khả năng kết nối trực diện."
    },
    {
        index: 4,
        title: "Làm sao để tham gia cuộc họp trực tuyến?",
        content: "Cuộc họp trực tuyến hỗ trợ cộng tác trong thời gian thực, tăng năng suất, tiết kiệm thời gian và giúp những người đang làm việc từ xa cảm thấy bớt cô độc cũng như thêm phần gắn kết. Nếu người dự trong hội thảo web nhóm không muốn xuất hiện trên camera, họ luôn có thể chọn tắt camera và chỉ bật micrô. Một số nền tảng họp trực tuyến thậm chí còn cho phép mọi người làm mờ hoặc thay đổi nền để giúp bảo vệ quyền riêng tư mà không làm mất khả năng kết nối trực diện."
    }
]

export const DATA_OVERALL:IOverallItem[] = [
    {
        index: 0,
        title: "Giới thiệu",
        content: ["Giới thiệu chung", "Mạng lưới toàn cầu", "Giải thưởng tiêu biểu", "Dấu ấn"]
    },
    {
        index: 1,
        title: "Tính năng",
        content: ["Chính phủ số", "Doanh nghiệp số", "Y tế số", "Giáo dục số", "Giao thông số"]
    },
    {
        index: 2,
        title: "Tích hợp",
        content: ["Công nghệ thông tin", "Hạ tầng số", "An ninh bảo mật", "Viễn thông"]
    },
    {
        index: 3,
        title: "Hỗ trợ",
        content: ["Tài liệu", "Câu hỏi thường gặp", "Chính sách bảo mật", "Điều khoản sử dụng website", "Liên hệ"]
    }
]