using Microsoft.AspNetCore.Mvc;

namespace projeto_mvc.Controllers
{
    public class CalculadoraController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    public IActionResult Soma(int valor1, int valor2)
        {
            var total = valor1 + valor2;
            return Ok(total);


        }
    public IActionResult Subtrai(int valor1, int valor2)
        {
            var total = valor1 - valor2;
            return Ok(total);

        }

        public IActionResult Divide(int valor1, int valor2)
        {
            var total = valor1 / valor2;
            return Ok(total);

        }
                public IActionResult Multiplica(int valor1, int valor2)
        {
            var total = valor1 * valor2;
            return Ok(total);

        }
    }
}
