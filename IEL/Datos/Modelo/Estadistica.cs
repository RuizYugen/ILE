﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Datos.Modelo
{
   public class Estadistica
    {
        public int IdEstadistica { get; set; }
        public string User { get; set; }
        public DateTime FechaInicio { get; set; }
        public int Nivel { get; set; }


        public string getFechaFormatoSQL()
        {
            return FechaInicio.Year + "-" + FechaInicio.Month + "-" + FechaInicio.Day;
        }
        
    }
}
