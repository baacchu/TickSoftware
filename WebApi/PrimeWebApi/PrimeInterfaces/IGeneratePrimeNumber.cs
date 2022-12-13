using PrimeWebApi.PrimeModels;


namespace PrimeWebApi.PrimeInterfaces
{
    public interface IGeneratePrimeNumber
    {
        PrimeResponse GeneratePrimeNumber(int endNumber);
    }
}
