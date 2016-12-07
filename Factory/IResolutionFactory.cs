using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using decisionmaker.Models;
using Microsoft.AspNetCore.Mvc;


namespace decisionmaker.Factory
{
    public interface IResolutionFactory
    {
        Resolution CreateResolution();
        Resolution GetResolution();
    }
}
