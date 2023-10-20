<?php

namespace App\Controller;

use App\Repository\InterestRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class InterestController extends AbstractController
{
    #[Route('/interest', name: 'app_interest_infos')]
    public function index(Request $request, InterestRepository $interestRepository): JsonResponse
    {
        $requestParam = $request->toArray();
        $interest = $interestRepository->findOneBy(['id' => $requestParam['interestId']]);
        
        return new JsonResponse([
            'content' => $this->renderView('interest/_infos.html.twig', [
                'interest' => $interest??null,
            ]),
            'title' => $interest->getName()??null,
            'status' => true,
        ]);
    }
}
