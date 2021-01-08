using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using ProjectGladiatorWebApi.Models;

namespace ProjectGladiatorWebApi.Controllers
{
    [EnableCors(origins:"*",headers:"*",methods:"*")]
    public class FinanceController : ApiController
    {
        public HttpResponseMessage GetFinance()
        {
            using (project1Entities db = new project1Entities())
            {
                var data = db.Finances.ToList();
                return Request.CreateResponse(HttpStatusCode.OK, data);
            }
        }
        [HttpGet]
        public HttpResponseMessage GetFinance(int FinanceID)
        {
            using (project1Entities db = new project1Entities())
            {
                var data = db.Finances.Find(FinanceID);
                if (data != null)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, data);
                }
                else
                {
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Purchase with finance id " + FinanceID + "not found");
                }
            }
        }
        public HttpResponseMessage PostFinance([FromBody] Finance finance)
        {
            try
            {
                using (project1Entities db = new project1Entities())
                {
                    db.Finances.Add(finance);
                    db.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.Created, finance);
                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }
        public HttpResponseMessage PutFinance(int FinanceID, [FromBody] Finance finance)
        {
            try
            {
                using (project1Entities db = new project1Entities())
                {
                    var data = db.Finances.Find(FinanceID);
                    if (data == null)
                    {
                        return Request.CreateResponse(HttpStatusCode.NotFound, "Purchase with finance id " + FinanceID + "not found");
                    }
                    else
                    {
                        data.Email = finance.Email;
                        data.Months = finance.Months;
                        data.EmiAmount = finance.EmiAmount;
                        data.TotalAmount = finance.TotalAmount;
                        data.RemainingAmount = finance.RemainingAmount;
                        data.purchaseDate = finance.purchaseDate;
                        data.ProductID = finance.ProductID;
                        data.LastPaymentDate = finance.LastPaymentDate;
                        db.SaveChanges();
                        return Request.CreateResponse(HttpStatusCode.OK, data);
                    }
                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }
        public HttpResponseMessage DeleteFinance(int FinanceId)
        {
            try
            {
                using (project1Entities db = new project1Entities())
                {
                    var data = db.Finances.Find(FinanceId);
                    if (data == null)
                    {
                        return Request.CreateResponse(HttpStatusCode.NotFound, "Purchase with finance id" + FinanceId + "not found");
                    }
                    else
                    {
                        db.Finances.Remove(data);
                        db.SaveChanges();
                        return Request.CreateResponse(HttpStatusCode.OK, data);
                    }
                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }
    }
}
