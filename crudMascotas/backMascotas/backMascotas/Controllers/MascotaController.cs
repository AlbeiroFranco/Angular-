using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace backMascotas.Controllers
{
    public class MascotaController : ApiController
    {
        // GET: api/Mascota
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Mascota/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Mascota
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Mascota/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Mascota/5
        public void Delete(int id)
        {
        }
    }
}
