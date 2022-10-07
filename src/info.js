import React from "react";
import Dbtn from "./doubleBtn";
import Footer from "./footer";
import Hero from "./hero";
import Nav from "./nav";

export default function Info() {
  return (
    <>
      <Nav />
      <Hero />
      <Dbtn />
      <div className="infobody border-1 rounded bg-white row p-5 ">
        <div className="col-md-6">
          <table class="table caption-top">
            <caption className="text-danger fs-3 text-center">
              ساعات سرویس دهی
            </caption>
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">صبحانه</th>
                <th scope="col">نهار</th>
                <th scope="col">شام</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">شنبه</th>
                <td>-</td>
                <td className="fw-bolder">۱۱:۳۰ تا ۱۷:۰۰</td>
                <td className="fw-bolder">۱۷:۰۰ تا ۲۲:۳۰</td>
              </tr>
              <tr>
                <th scope="row">یک شنبه</th>
                <td>-</td>
                <td className="fw-bolder">۱۱:۳۰ تا ۱۷:۰۰</td>
                <td className="fw-bolder">۱۷:۰۰ تا ۲۲:۳۰</td>
              </tr>
              <tr>
                <th scope="row">دو شنبه</th>
                <td>-</td>
                <td>۱۱:۳۰ تا ۱۷:۰۰</td>
                <td>۱۷:۰۰ تا ۲۲:۳۰</td>
              </tr>
              <tr>
                <th scope="row">سه شنبه</th>
                <td>-</td>
                <td className="fw-bolder">۱۱:۳۰ تا ۱۷:۰۰</td>
                <td className="fw-bolder">۱۷:۰۰ تا ۲۲:۳۰</td>
              </tr>
              <tr>
                <th scope="row">چهار شنبه</th>
                <td>-</td>
                <td className="fw-bolder">۱۱:۳۰ تا ۱۷:۰۰</td>
                <td className="fw-bolder">۱۷:۰۰ تا ۲۲:۳۰</td>
              </tr>
              <tr>
                <th scope="row">دو شنبه</th>
                <td>-</td>
                <td className="fw-bolder">۱۱:۳۰ تا ۱۷:۰۰</td>
                <td className="fw-bolder">۱۷:۰۰ تا ۲۲:۳۰</td>
              </tr>
              <tr>
                <th scope="row">پنج شنبه</th>
                <td>-</td>
                <td className="fw-bolder">۱۱:۳۰ تا ۱۷:۰۰</td>
                <td className="fw-bolder">۱۷:۰۰ تا ۲۲:۳۰</td>
              </tr>
              <tr>
                <th scope="row">جمعه</th>
                <td>-</td>
                <td className="fw-bolder">۱۱:۳۰ تا ۱۷:۰۰</td>
                <td className="fw-bolder">۱۷:۰۰ تا ۲۲:۳۰</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          <h3 className="text-center text-danger">نوع غذا</h3>
          <div className="d-flex justify-content-center mt-3">
            <div className="border rounded-circle py-2 px-3 mx-2">فست فود</div>
            <div className="border rounded-circle py-2 px-3 mx-2">کافی شاپ</div>
            <div className="border rounded-circle py-2 px-3 mx-2">پیتزا</div>
            <div className="border rounded-circle py-2 px-3 mx-2">ساندویچ</div>
          </div>
          <div className="d-flex justify-content-center mt-2">
            <div className="border rounded-circle py-2 px-3 mx-2">
              ایتالیایی
            </div>
            <div className="border rounded-circle py-2 px-3 mx-2">
              مرغ سوخاری
            </div>
          </div>
        </div>
        <div className="border-top">
            <h3 className="text-danger text-center py-4">آدرس رستوران</h3>
            <h4 className="text-center">سالاریه، نبش میدان میثم</h4>
            <h4 className="text-black text-center">تلفن <a className="text-black fs-5" href="tel:09305306508">09305306508</a></h4>
        </div>
      </div>
      <Footer />
    </>
  );
}
