namespace AureliaAspNet.Controllers
{
    using System.Linq;
    using System.Security.Claims;
    using Microsoft.AspNet.Mvc;

    public class BaseApiController : Controller
    {
        protected string GetLoggedInUserId()
        {
            if (User == null)
            {
                return null;
            }

            var id = this.User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier);
            return id?.Value;
        }
    }
}