using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace decisionmaker.Models
{
    public class Option
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string PositiveAttributes { get; set; }
        public string NegativeAttributes { get; set; }
        public string Notes { get; set; }
    }
}
