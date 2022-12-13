using Microsoft.AspNetCore.Mvc;
using PrimeWebApi.PrimeInterfaces;
using PrimeWebApi.PrimeServices;


namespace PrimeWebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PrimeCalculatorController : ControllerBase
    {
        private readonly ILogger<PrimeCalculatorController> _logger;
        private readonly IGeneratePrimeNumber _generatePrimeNumber;

        public PrimeCalculatorController(ILogger<PrimeCalculatorController> logger, IGeneratePrimeNumber generatePrimeNumber)
        {
            _logger = logger;
            _generatePrimeNumber = generatePrimeNumber;
        }

        [HttpGet("GetPrimeNumbers")]
        public IActionResult GetPrimeNumbers([FromQuery] int maxPrimeNumber)
        {
            try
            {
                if (maxPrimeNumber <= 0 || maxPrimeNumber > 100) 
                {
                    throw new SystemException("Input value should be in range of  1 to 100");
                }

                var result = _generatePrimeNumber.GeneratePrimeNumber(maxPrimeNumber);
                return Ok(result);
            }
            catch (Exception ex)
            {
                if (ex != null)
                {
                    return BadRequest(new { message = ex.Message });
                }
                return BadRequest(new { message = "Error processing request. Please contact Admin." });
            }
        }
    }
}
