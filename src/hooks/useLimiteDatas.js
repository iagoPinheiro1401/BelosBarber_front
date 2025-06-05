export default function useLimiteDeDatas(diasNoFuturo = 15) {
  const hoje = new Date();
  const limite = new Date();
  limite.setDate(limite.getDate() + diasNoFuturo);

  const formatarData = (data) => data.toISOString().split("T")[0];

  return {
    min: formatarData(hoje),
    max: formatarData(limite),
  };
}