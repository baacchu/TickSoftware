using PrimeWebApi.PrimeInterfaces;
using PrimeWebApi.PrimeModels;


namespace PrimeWebApi.PrimeServices
{
    public class PrimeNumber : IGeneratePrimeNumber
    {
        public PrimeResponse GeneratePrimeNumber(int rangeEnd)
        {
            try
            {
                if (rangeEnd<=0)
                {
                    throw new SystemException("Input value should be in range of  1 to 100");
                }

                int counter, startNumber, endNumber;
                List<int> primeNumbers = new List<int>();

                startNumber = 1;
                endNumber = rangeEnd;

                for (int actual = startNumber; actual < endNumber; actual++)
                {
                    counter = 0;
                    for (int index = 2; index <= actual / 2; index++)
                    {
                        if (actual % index == 0)
                        {
                            counter++;
                            break;
                        }
                    }
                    if (counter == 0 && actual != 1)
                        primeNumbers.Add(actual);
                }


                return new PrimeResponse()
                {
                    PrimeNumbers = primeNumbers,
                    RangeEnd = rangeEnd
                };
            }
            catch (Exception)
            {
                throw;
            }

        }
    }
}
