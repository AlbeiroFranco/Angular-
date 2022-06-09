using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backMascotas.Models
{
    public class Mascota
    {
        public int id { get; set; }
        public string nombre { get; set; }
        public int edad { get; set; }
        public string descripcion { get; set; }

        public Mascota() { }

        public Mascota(int Id, string Nombre, int Edad, string desc)
        {
            id = Id;
            nombre = Nombre; ;
            edad = Edad;
            descripcion = desc;

        }

        public Mascota(string Nombre, int Edad, string desc)
        {
            nombre = Nombre; ;
            edad = Edad;
            descripcion = desc;

        }


    }
}