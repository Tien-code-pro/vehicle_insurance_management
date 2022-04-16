using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace VehicleInsuranceManegement.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
     

        public ActionResult Home()
        {
            return View();
        }

        public ActionResult Service()
        {
            return View();
        }


        public ActionResult BLog()
        {
            return View();
        }

        public ActionResult Name_and_contact()
        {
            return View();
        }


        public ActionResult Car_of_information()
        {
            return View();
        }

        public ActionResult Online_quotation()
        {
            return View();
        }


        public ActionResult Register_and_value()
        {
            return View();
        }

        public ActionResult Blog01()
        {
            return View();
        }

        public ActionResult Blog02()
        {
            return View();
        }

        public ActionResult Car_date_first_registration()
        {
            return View();
        }

        public ActionResult Car_manual()
        {
            return View();
        }

        public ActionResult Customer_care_program()
        {
            return View();
        }

        public ActionResult Date_of_birth()
        {
            return View();
        }

        public ActionResult form()
        {
            return View();
        }

        public ActionResult Location()
        {
            return View();
        }

        public ActionResult Marterial_protection()
        {
            return View();
        }

        public ActionResult Start_date()
        {
            return View();
        }

        public ActionResult Terms_conditions()
        {
            return View();
        }

    }
}