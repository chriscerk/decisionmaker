using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace decisionmaker.Models
{
    public class Resolution
    {
        public Guid Id = Guid.NewGuid();
        public string Name { get; set; }
        public List<string> Deciders { get; set; }
        public string Result;
    }
}
