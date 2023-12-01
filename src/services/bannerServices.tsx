import { API_URL } from "../constant/config";

export interface IBannerResponse {
  _id: string;
  title: string;
  subTitle: string,
  type: string,
  link: string,
  image: string,
  defaultStatus: string,
  createdAt: string,
  updatedAt: string,

}

interface ErrorResponse {
  message: string;
}
interface GetBannersParams {
  slug: string;
}

export const getBanners = async ({ slug }: GetBannersParams): Promise<IBannerResponse[]> => {
  try {
    const response = await fetch(`${API_URL}/banner/all/${slug}`, {
      cache: 'no-store',
    });
    if (!response.status) {
      const errorResponse: ErrorResponse = await response.json();
      throw new Error(errorResponse.message);
    }
    const data = await response.json();

    return data.data;
  } catch (error) {

    throw new Error("Failed to fetch banners");
  }
};
