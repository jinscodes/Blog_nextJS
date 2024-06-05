I released company's introduction page with AWS S3 + CloudFront + Route53. After releasing, there are some changes, so I needed to upload the new codes.

I fixed the codes and build the file. I uploaded build file to the AWS server. But, the changes was not reflected to the page.

**What's the problem?**

## Problem Analysis

Do the service via CloudFront, the project modifications do not apply immediately.

The reason for the issue is CloudFront's cache function, and it is said that the cache is maintained for 24 hours by default. Therefore, no matter how much you reload and rebuild and distribute changes, the modified contents are not reflected.

CloudFront caches files at each edge and uses cached files without requesting Origin (the original file in the S3 bucket) until the TTL expires.

If you want to apply the changes right away, you should remove the cache.

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/682b096f-96bb-46b5-badc-db96ae6cce17)

> 💡 **NOTE**  
> **S3** as file storage, **Route 53** as DNS, and **CloudFront** as Content Delivery Network (CDN)

## How To Clear Cache

It's not difficult to get rid of the cache from the CloudFront.

1. CloudFront - Distributions - Select Distribution - Invalidation tab - Create Invalidation

2. Add the object path
   1. To remove all caches, `/*`

---

[](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html)

[](https://velog.io/@nawon5154/AWS-CloudFront-%EC%99%80-%EC%97%B0%EA%B2%B0%EB%90%9C-S3-%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%B3%80%EA%B2%BD-%EC%82%AC%ED%95%AD-%EB%B0%98%EC%98%81-%EC%95%88%EB%90%A8-%ED%98%84%EC%83%81)

[](https://velog.io/@pikadev1771/AWS-%EB%B3%80%EA%B2%BD-%EC%82%AC%ED%95%AD%EC%9D%84-%EB%B0%94%EB%A1%9C-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0-%EC%9C%84%ED%95%9C-CloudFront-%EC%BA%90%EC%8B%9C-%EC%82%AD%EC%A0%9C)

[](https://velog.io/@yujuck/AWS-CloudFront-%EC%82%AC%EC%9A%A9%EA%B3%BC-%EC%BA%90%EC%8B%9C-%EB%AC%B4%ED%9A%A8%ED%99%94-%EC%9E%90%EB%8F%99%ED%99%94)

[](https://velog.io/@dotlike/distribution-automation)
