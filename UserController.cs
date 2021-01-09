using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using ProjectGladiator.Models;

namespace ProjectGladiator.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class UserController : ApiController
    {
        [HttpGet]
        public HttpResponseMessage GetDashBoard(string email)
        {
            project1Entities db = new project1Entities();
            var data = from cd in db.CardDetails
                       join fn in db.Finances on cd.Email equals fn.Email
                       join pr in db.Products on fn.ProductID equals pr.ProductID
                       where cd.UserTable.Email == email
                       select new
                       {
                           Card_Number = cd.CardNumber,
                           Email = cd.UserTable.Email,
                           Name = cd.UserTable.Name,
                           Valid_Till = cd.ValidTill.ToString("MM/yy"),
                           Card_Type = cd.CardType,
                           Total_Credit = fn.TotalAmount,
                           Credit_used = fn.TotalAmount - fn.RemainingAmount,
                           Remaining_Credit = fn.RemainingAmount,
                           Product_Name = pr.ProductName,
                           Amount = pr.Price,
                           Paid = fn.TotalAmount - fn.RemainingAmount,
                           Balance = fn.TotalAmount - fn.RemainingAmount,
                           Product = pr.ProductName,
                           Date = fn.LastPaymentDate,
                           Amount_Paid = fn.TotalAmount - fn.RemainingAmount
                       };
            return Request.CreateResponse(HttpStatusCode.OK, data);
        }
    }
}
