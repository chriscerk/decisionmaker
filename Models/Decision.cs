using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace decisionmaker.Models
{
    public class Decision
    {
        public Guid Id = Guid.NewGuid();
        public string Name { get; set; }
        public string Description { get; set; }
        public Goal[] Goals { get; set; }
        public Option[] Options { get; set; }
        public string Results { get; set; }
    }
}
