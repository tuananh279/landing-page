import React, { Fragment } from 'react'
import Overall from './footer/overall'

const MainFooter = () => {
    return (
        <Fragment>
            <Overall />
            <div className='bg-vmp-black03 border-t border-dashed text-white flex flex-col justify-center items-center p-4 lg:py-12 text-center'>
                <p>Cơ quan chủ quản: Tổng Công ty Giải pháp Doanh nghiệp Viettel – Chi nhánh Tập đoàn Công nghiệp – Viễn thông Quân đội</p>
                <p>Địa chỉ: Số 1, đường Trần Hữu Dực, Phường Mỹ Đình 2, Quận Nam Từ Liêm, Hà Nội, Việt Nam</p>
                <p className='lg:w-2/3 text-center'>Mã số doanh nghiệp: 0100109106-476 do Sở Kế hoạch và Đầu tư Thành phố Hà Nội cấp lần đầu ngày 26/09/2018, sửa đổi lần thứ 2 ngày 22/07/2019. Chịu trách nhiệm nội dung: Ông Nguyễn Mạnh Hổ</p>
                <p>@Viettel 2021</p>
            </div>
        </Fragment>
    )
}

export default MainFooter